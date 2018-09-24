import React, { Component } from 'react'
import './Data.css'
/*global chrome*/

//antd
import { Progress, Button } from 'antd'

class Data extends Component {
  constructor() {
    super()
    this.state = {
      data: 0
    }

    this.handleMessage = this.handleMessage.bind(this)
  }

  componentDidMount() {
    chrome.runtime.onMessage.addListener(this.handleMessage)
  }

  handleMessage(msg) {
    if (msg.target === 'app') {
      if (msg.type === 'setMessage') {
        this.setState({ data: msg.body });
      }
    }
  }

  render() {
    const percentage = this.state.data * 100
    const pctClean = Number.parseFloat(percentage).toFixed(2)
    return (
      <div id="data">
        <div id="data-title">
          <h3>Search Results Detail</h3>
        </div>
        <div id="data-bar">
          <p>% Sponsored Content</p>
          <Progress percent={pctClean} />
          <br></br>
          <p id="data-true">% True Search Results</p>
          <Progress percent={100 - pctClean} />
        </div>
        <div id="remove-button">
          <Button type="danger" block id="remove-button">Remove Sponsored Posts</Button>
        </div>
      </div>
    )
  }
}

export default Data
