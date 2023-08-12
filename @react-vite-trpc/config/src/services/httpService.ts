import { cleanEnv } from 'envalid'

const { isProd } = cleanEnv(process.env, {})

export class HttpService {
   private static readonly host = 'react-vite-trpc.onrender.com' // NOTE: must be a raw hostname

   private static readonly serverPort = 3001

   private static readonly clientPort = 3000

   public static readonly serverUrl = isProd ? `https://${this.host}` : `http://localhost:${this.serverPort}`

   public static readonly clientUrl = isProd ? `https://${this.host}` : `http://localhost:${this.clientPort}`
}
