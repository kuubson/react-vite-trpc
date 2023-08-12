import { Environment } from './env'

export const { PORT, isProd, isDev } = Environment.config()
