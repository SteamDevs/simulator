"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simulador_1 = require("../models/simulador");
var Simulador = /** @class */ (function () {
    function Simulador() {
    }
    Object.defineProperty(Simulador, "getInstance", {
        get: function () {
            if (this.instance == null) {
                this.instance = new this;
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    Simulador.prototype.addData = function (req, res) {
        var data = new simulador_1.simuladorModel({
            lat: req.body.lat,
            lng: req.body.lng,
            battery_level: req.body.battery_level,
            uuid_device: req.body.uuid_device,
            rumbo: req.body.rumbo,
            speed: req.body.speed
        });
        if (req.body.lat && req.body.lng && req.body.uuid_device) {
            data.save(function (err, dataSave) {
                if (err)
                    return res.status(500).send({ message: 'Algo salió mal: ' + err });
                if (!dataSave)
                    return res.status(404).send({ message: 'No se pudo guardar la simulación' });
                return res.status(200).send({ simulador: dataSave, message: 'Simulación guardada' });
            });
        }
        else if (!req.body.lat) {
            return res.status(200).send({ message: 'El dato LAT es obligatorio' });
        }
        else if (!req.body.lng) {
            return res.status(200).send({ message: 'El dato LNG es obligatorio' });
        }
        else if (!req.body.uuid_device) {
            return res.status(200).send({ message: 'El dato UUI_DEVICE es obligatorio' });
        }
    };
    Simulador.prototype.getAllData = function (req, res) {
        simulador_1.simuladorModel.find(function (err, allData) {
            if (err)
                return res.status(500).send({ message: 'Algo salió mal: ' + err });
            if (!allData)
                return res.status(404).send({ message: 'No hay datos' });
            return res.status(200).send({ data: allData });
        });
    };
    Simulador.prototype.getDataDevice = function (req, res) {
        var device = req.params.uuid_device;
        simulador_1.simuladorModel.find({ uuid_device: device }, function (err, data) {
            if (err) {
                res.status(500).send({ message: 'Algo salió mal: ' + err });
            }
            if (!data) {
                res.status(404).send({ message: 'No hay datos' });
            }
            else {
                res.status(200).send({ data: data });
            }
        });
    };
    return Simulador;
}());
exports.Simulador = Simulador;
