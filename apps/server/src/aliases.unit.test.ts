import fs from 'fs-extra'
import moduleAlias from 'module-alias'
import { type SpyInstance, afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Aliases } from './aliases'

describe('Aliases', () => {
   let mockReadJsonSync: SpyInstance
   let mockReaddirSync: SpyInstance
   let mockAddAliases: SpyInstance

   beforeEach(() => {
      mockReadJsonSync = vi.spyOn(fs, 'readJsonSync')
      mockReaddirSync = vi.spyOn(fs, 'readdirSync')
      mockAddAliases = vi.spyOn(moduleAlias, 'addAliases')
   })

   afterEach(() => {
      vi.restoreAllMocks()
   })

   describe('.config', () => {
      it('should configure internal packages and directories', () => {
         const configInternalPackagesSpy = vi.spyOn(Aliases, 'configInternalPackages')

         const configDirectoriesSpy = vi.spyOn(Aliases, 'configDirectories')

         Aliases.config()

         expect(configInternalPackagesSpy).toHaveBeenCalled()

         expect(configDirectoriesSpy).toHaveBeenCalled()
      })
   })

   describe('.configInternalPackages', () => {
      it('should read tsconfig.json file', () => {
         Aliases.configInternalPackages()

         expect(mockReadJsonSync).toBeCalledWith('tsconfig.json')
      })

      it('should add aliases for internal packages', () => {
         const references = [{ path: '../@react-vite-trpc/config' }]

         const tsConfig = {
            extends: '',
            compilerOptions: {},
            references,
         }

         mockReadJsonSync.mockReturnValueOnce(tsConfig)

         Aliases.configInternalPackages()

         expect(mockAddAliases).toBeCalled()

         references.forEach(({ path }) => {
            const [_, internalPackage] = path.split('@')

            const packageName = `@${internalPackage}`

            expect(mockAddAliases).toBeCalledWith({ [packageName]: `${packageName}/dist/index.js` })
         })
      })
   })

   describe('.configDirectories', () => {
      it('should read and add aliases for directories', () => {
         const directories = ['core', 'env', 'middlewares', 'modules', 'testing', 'types'].map(name => ({
            name,
            isDirectory: () => true,
         }))

         mockReaddirSync.mockReturnValueOnce(directories)

         Aliases.configDirectories()

         expect(mockReaddirSync).toHaveBeenCalledOnce()

         expect(mockAddAliases).toBeCalled()
      })
   })
})
