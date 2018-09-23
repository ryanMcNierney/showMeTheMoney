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
    return (
      <div id="data">
        <h3>Data goes here</h3>
        <p>Percentage: {this.state.data}</p>
      </div>
    )
  }
}

export default Data
