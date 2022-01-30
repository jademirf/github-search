import React from 'react'
import Home from './pages/Home'
import UserProfile from './components/UserProfile'
import {ResetCSS} from './global/restecss'
import TabsNavigation from './components/TabsNavigation'

function App() {
  return (
    <main className="App">
      <ResetCSS />
        <Home>
          <UserProfile />
          <TabsNavigation></TabsNavigation>
        </Home>
    </main>
  )
}

export default App;
