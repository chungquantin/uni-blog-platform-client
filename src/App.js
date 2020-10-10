import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import AppRouting from "./AppRouting"
import "./App.css"

function App() {
  return (
    <Router>
      <AppRouting />
    </Router>
  )
}

export default App
