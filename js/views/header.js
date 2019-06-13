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

// <div style={ styles.colorPicker }>
//           <span style={ styles.all }/>
//           <span style={ styles.black }/>
//           <span style={ styles.red }/>
//           <span style={ styles.white }/>
//           <span style={ styles.blue }/>
//           <span style={ styles.green }/>
//         </div>