import React from 'react'
import * as ROUTES from './constants/routes'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, Browse, Signin, Signup } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

const App = () => {
  const { user } = useAuthListener()

  return (
    <Router>
      <Switch>
        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <Signup />
        </IsUserRedirect>
      </Switch>
    </Router>
  )
}

export default App
