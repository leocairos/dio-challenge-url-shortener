import 'dotenv-safe/config'
import express from 'express'
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'

const apiPort = Number(process.env.API_PORT)
const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(apiPort, () => console.log(`API is running at ${apiPort} port.`))
