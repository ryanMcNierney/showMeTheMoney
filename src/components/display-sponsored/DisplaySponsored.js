import React, { Component } from 'react'
import './DisplaySponsored.css'
import Data from '../data/Data'

//antd
import { Button } from 'antd'

class DisplaySponsored extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false,
      disabled: true
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
  }

  handleClick() {
    this.setState({
      clicked: true
    })
  }

  handleRemoveClick() {
    this.setState({
      disabled: false
    })
  }

  render() {
    const { clicked, disabled } = this.state
    return (
      <div id="display-sponsored">
        <div id="display-button">
          <Button block id="display-button" onClick={this.handleClick}>Show Sponsored Posts</Button>
        </div>
        {
          (clicked === true) ? <Data removeButton={this.handleRemoveClick} /> : null
        }
        <div id="remove-button">
          <Button type="danger" block id="remove-button" disabled={disabled}>Remove Sponsored Posts</Button>
        </div>
      </div>

    )
  }
}

export default DisplaySponsored
