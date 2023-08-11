import { cleanEnv, str as string } from 'envalid'

export class Environment {
   public static config(env: unknown) {
      return cleanEnv(env, {
         MODE: string({
            desc: 'The mode the web is running in',
            example: 'development',
            choices: ['development', 'test', 'production'] as const,
            default: 'development',
            docs: 'https://vitejs.dev/guide/env-and-mode.html',
         }),
      })
   }
}
