import '@/styles/globals.scss'
import { createRoot } from 'react-dom/client'
import { App } from './components/App/App'

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not fount')
}

const container = createRoot(root)

container.render(<App />)
