import React, { Component } from 'react'
/*global chrome*/

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
        <h3>Data goes here</h3>
        <p>Percentage: {pctClean}%</p>
      </div>
    )
  }
}

export default Data
