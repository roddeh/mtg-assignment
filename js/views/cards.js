import React from 'react'
import _ from 'underscore'
import Card from './card'
import Loader from './loader'
import settings from '../settings'
import service from '../service'

// Kick off the load of the next page when we are within this many pixels of the bottom
const SCROLL_THRESHOLD = 300

class Cards extends React.Component {

  constructor(props){
    super(props)
    // Scrolling happens fast
    // Throttle the handler, there is no need to calculate on every scroll event.
    this.handleScroll = _.throttle(this.handleScroll, 1000, {leading:true}).bind(this)

    this.containerRef = React.createRef();
    let cards = []
    cards.filterCount = 0
    this.state = {loading:true, cards, types: settings.types()}
  }

  componentDidMount(){
    this.loadCards()
  }

  loadCards(){
    this.setState({loading:true})

    let offset = 0
    if(this.state.cards){
      offset = this.state.cards.length + this.state.cards.filterCount
    }

    service.cards({offset, types:this.state.types})
      .then((cards) => {
        let filterCount = this.state.cards.filterCount + cards.filterCount
        cards = this.state.cards.concat(cards)
        cards.filterCount = filterCount
        this.setState({cards, loading:false})
      })
  }

  handleScroll(){
    if(this.state.loading){
      return
    }

    let ref = this.containerRef.current
    if(ref.scrollTop + ref.clientHeight >= ref.scrollHeight - SCROLL_THRESHOLD){
      this.loadCards()
    }
  }

  render(){
    return (
      <div className='card-container' onScroll={ this.handleScroll } ref={ this.containerRef }>
        {
          this.state.cards.map((c, i) => {
            return (
              <Card key={ i } card={ c }></Card>
            )
          })
        }
        {
          this.state.loading && <Loader/>
        }
      </div>
    )
  }
}

export default Cards