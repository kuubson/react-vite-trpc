import { readJsonSync, readdirSync } from 'fs-extra'
import moduleAlias from 'module-alias'
import path from 'path'

type TsConfig = {
   extends: string
   compilerOptions: Record<string, string>
   references: { path: string }[]
}

export class Aliases {
   public static async config() {
      this.configInternalPackages()

      this.configDirectories()
   }

   public static configInternalPackages() {
      const tsConfig = readJsonSync('tsconfig.json') as TsConfig

      const aliases = tsConfig.references.map(({ path }) => {
         const [_, internalPackage] = path.split('@')

         const packageName = `@${internalPackage}`.replace('/tsconfig.json', '')

         const packageEntry = `${packageName}/dist/index.js`

         return { [packageName]: packageEntry }
      })

      const flatAliases = Object.assign({}, ...aliases)

      moduleAlias.addAliases(flatAliases)
   }

   public static configDirectories() {
      const directories = readdirSync('./src', { withFileTypes: true })
         .filter(directory => directory.isDirectory())
         .map(({ name }) => name)

      const aliases = directories.map(directory => ({ [directory]: path.resolve(__dirname, directory) }))

      const flatAliases = Object.assign({}, ...aliases)

      moduleAlias.addAliases(flatAliases)
   }
}

Aliases.config()
