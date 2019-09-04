import {  Router } from 'express'
import { Simulador } from '../controllers/simulador'

export const app = Router()

app.post('/simulacion/add', Simulador.getInstance.addData)
app.get('/simulaciones', Simulador.getInstance.getAllData)
app.get('/simulacion/:uuid_device', Simulador.getInstance.getDataDevice)
