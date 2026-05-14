import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import App from './App'
import Home from './pages/Home'
import BacPage from './pages/BacPage'
import CheatSheetPage from './pages/CheatSheetPage'
import FlashCardsPage from './pages/FlashCardsPage'
import MindMapsPage from './pages/MindMapsPage'

const rootRoute = createRootRoute({ component: App })

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const bacRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bac/$slug',
  component: BacPage,
})

const cheatsheetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cheatsheet/$slug',
  component: CheatSheetPage,
})

const flashcardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/flashcards',
  component: FlashCardsPage,
})

const mindmapsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/mindmaps',
  component: MindMapsPage,
})

export const routeTree = rootRoute.addChildren([
  indexRoute,
  bacRoute,
  cheatsheetRoute,
  flashcardsRoute,
  mindmapsRoute,
])

export const router = createRouter({ routeTree })
