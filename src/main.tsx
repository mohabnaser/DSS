import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/manrope'
import '@fontsource-variable/newsreader'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import 'katex/dist/katex.min.css'
import './styles.css'
import { LearningProvider } from './context/LearningContext'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LearningProvider>
      <App />
    </LearningProvider>
  </StrictMode>,
)
