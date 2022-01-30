import React from 'react'
import Home from './pages/Home'
import UserProfile from './components/UserProfile'
import {ResetCSS} from './global/restecss'
import TabsNavigation from './components/TabsNavigation'
import GithubProvider from './providers/github-provider'

function App() {
  return (
    <main className="App">
      <GithubProvider>
      <ResetCSS />
        <Home>
          <UserProfile />
          <TabsNavigation></TabsNavigation>
        </Home>
        </GithubProvider>
    </main>
  )
}

export default App;
