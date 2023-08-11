import cookieParser from 'cookie-parser'
import type { Application } from 'express'
import { type RequestHandler } from 'express-serve-static-core'
import { initializeTrpc } from 'trpc/api/router'

export class Middlewares {
   public static config(app: Application) {
      app.use(cookieParser() as RequestHandler)

      initializeTrpc(app)
   }
}
