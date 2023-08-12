import { userProcedure } from 'trpc'

export const getRole = userProcedure.query(() => ({ role: 'USER' as const }))
