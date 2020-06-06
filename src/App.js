import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ErrorPage, TodoPage, HomePage, SignupPage } from './pages'
// import SignupPage from './pages/signup'
// import HomePage from './pages/home'
// import ErrorPage from './pages/error'
// import TodoPage from './pages/todo'

import GlobalStyles from './components/shared/global-style'
import Gnb from './components/gnb'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Gnb />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/todo" component={TodoPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default App
