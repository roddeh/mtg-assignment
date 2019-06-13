import React from 'react'

class Card extends React.Component {

  render(){
    let card = this.props.card
    // Original Type is sometimes empty, fallback to the 'type' if this is the case.
    return (
      <div className='card'>
        <img src={ card.imageUrl }/>
        <div>{ card.name }</div>
        <div>{ card.artist }</div>
        <div>{ card.setName }</div>
        <div>{ card.originalType || card.type }</div>
      </div>
    )
  }
}

export default Card