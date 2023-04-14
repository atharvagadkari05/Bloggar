import express from 'express'
import {config} from './config/config'
const app = express()




app.listen(config.server.port, () => {
  console.log(` App listening on port ${config.server.port}`)
})