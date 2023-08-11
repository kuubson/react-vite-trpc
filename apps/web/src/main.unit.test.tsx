import { render } from '@testing-library/react'
import { vi } from 'vitest'

import { act } from 'react-dom/test-utils'

describe('main.tsx', () => {
   it('should call document.getElementById', async () => {
      render(<div id="root"></div>)

      const spiedDocument = vi.spyOn(document, 'getElementById')

      await act(async () => {
         await import('./main')
      })

      expect(spiedDocument).toBeCalled()
   })
})
