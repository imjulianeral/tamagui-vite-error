import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TamaguiProvider config={config}>
      <Suspense>
        <App />
      </Suspense>
    </TamaguiProvider>
  </React.StrictMode>
)
