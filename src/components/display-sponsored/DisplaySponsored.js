import React, { Component } from 'react'
import './DisplaySponsored.css'
import Data from '../data/Data'

class DisplaySponsored extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      clicked: true
    })
  }

  render() {
    const { clicked } = this.state
    return (
      <div id="display-sponsored">
        <button type="button" id="display-button" onClick={this.handleClick}>Click</button>
        <h4>Display Sponsored Content</h4>
        {
          (clicked === true) ? <Data /> : null
        }
      </div>
    )
  }
}

export default DisplaySponsored
