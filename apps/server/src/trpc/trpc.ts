import { initTRPC } from '@trpc/server'

import { type Context } from './api/router'

const t = initTRPC.context<Context>().create()

export const userProcedure = t.procedure

export const { middleware, router } = t
