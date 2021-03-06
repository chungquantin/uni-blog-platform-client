import React from "react"
// -- Routing Handling --
import { Route, Switch, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import * as ROUTES from "./constants/routes"
import { LoginPage } from "./pages"

function AppRouting() {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={ROUTES.__login} component={LoginPage} />
      </Switch>
    </AnimatePresence>
  )
}

export default AppRouting
