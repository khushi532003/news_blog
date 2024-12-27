import React, { Component } from 'react'
import News from '../components/News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <News pageSize={5} country="us" category="technology" />
      </div>
    )
  }
}