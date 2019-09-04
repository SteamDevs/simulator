"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var simulador_1 = require("../controllers/simulador");
var app = express_1.Router();
app.post('/simulacion/add', simulador_1.Simulador.getInstance.addData);
app.get('/simulaciones', simulador_1.Simulador.getInstance.getAllData);
app.get('/simulacion/:uuid_device', simulador_1.Simulador.getInstance.getDataDevice);
exports.default = app;
