import React from 'react'

class Header extends React.Component {

  render(){
    return (
      <div className='header'>
        <div className='content'>
          <h1>Magic: The Gathering</h1>
        </div>
        <div className='blocker'></div>
      </div>
    )
  }
}

export default Header