import ReactDOM from 'react-dom/client'

import { App } from 'components/core/App'

import { Providers } from 'components/shared'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <Providers>
      <App />
   </Providers>
)
