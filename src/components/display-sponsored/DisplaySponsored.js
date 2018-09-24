import React, { Component } from 'react'
import './DisplaySponsored.css'
import Data from '../data/Data'

//antd
import { Button } from 'antd'

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
        <div id="display-button">
          <Button block id="display-button" onClick={this.handleClick}>Show Sponsored Posts</Button>
        </div>
        {
          (clicked === true) ? <Data /> : null
        }
      </div>
    )
  }
}

export default DisplaySponsored
