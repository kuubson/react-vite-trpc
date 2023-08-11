import { render } from '@testing-library/react'

import { App } from 'components/core'

import { Providers } from 'components/shared'

describe('main.tsx', () => {
   it('should render App within Providers', () => {
      render(
         <Providers>
            <App />
         </Providers>
      )
   })
})
