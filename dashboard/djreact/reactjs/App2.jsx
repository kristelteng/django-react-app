import React from "react"
import { render } from "react-dom"

import App1Container from "./containers/App2Container"

class App1 extends React.Component {
  render() {
    return (
      <App2Container />
    )
  }
}

render(<App2/>, document.getElementById('site_statistics'))