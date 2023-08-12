import { describe } from 'node:test'
import { expect, it } from 'vitest'

import { client } from 'trpc/client'

describe('getRole', () => {
   it('should return valid Role', async () => {
      const role = await client.getRole.query()

      expect(role).toStrictEqual({ role: 'USER' })
   })
})
