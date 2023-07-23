import { createTRPCReact } from '@trpc/react-query'

import { type AppRouter } from '../../../server/src/trpc/api/router'

export const trpc = createTRPCReact<AppRouter>()
