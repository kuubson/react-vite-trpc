import moduleAlias from 'module-alias'
import path from 'path'

class Aliases {
   public static config() {
      moduleAlias.addAlias('config', path.resolve(__dirname, '../config'))

      moduleAlias.addAlias('trpc', path.resolve(__dirname, '../trpc'))

      moduleAlias.addAlias('middlewares', path.resolve(__dirname, '../middlewares'))
   }
}

Aliases.config()
