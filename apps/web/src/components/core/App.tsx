import { Outlet, RootRoute, Route, Router, RouterProvider } from '@tanstack/router'
import styled from 'styled-components'

import { GlobalStyle } from 'styles'

import { Home } from 'components/features'

const rootRoute = new RootRoute({ component: () => <Outlet /> })

const home = new Route({
   getParentRoute: () => rootRoute,
   path: '/',
   component: Home,
})

const routeTree = rootRoute.addChildren([home])

const router = new Router({ routeTree })

window.navigate = router.navigate

export const App = () => (
   <AppContainer>
      <GlobalStyle />
      <RouterProvider router={router} />
   </AppContainer>
)

const AppContainer = styled.div`
   height: 100%;
`

declare global {
   interface Window {
      navigate: typeof router.navigate
   }
}

declare module '@tanstack/router' {
   interface Register {
      router: typeof router
   }
}
