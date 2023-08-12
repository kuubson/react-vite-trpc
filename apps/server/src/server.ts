import 'dotenv/config'

import './aliases'

import { HttpServer } from 'core'

import { Middlewares } from 'middlewares'

const { app } = HttpServer.config()

Middlewares.config(app)
