import React from 'react'
import { render } from 'react-dom'
import settings from './settings'
import service from './service'

import Header from './views/header'
import Cards from './views/cards'

class App extends React.Component {

  render(){
    return (
      <React.Fragment>
        <Header/>
        <Cards/>
      </React.Fragment>
    )
  }
}

function initialise(){
  settings.initialise().then(renderApp)
}

function renderApp(userSettings){
  render((
    <App userSettings={ userSettings }/>
  ), document.getElementById('root'))  
}

window.onload = initialise;