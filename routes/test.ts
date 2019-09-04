import {  Router } from 'express'
import { Test } from '../controllers/test'

export const app = Router()

app.post('/test', Test.getInstance.sendTest )
app.get('/test', Test.getInstance.getTest )

