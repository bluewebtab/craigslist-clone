import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  
  render() {
    const{match, location, history} = this.props
    return (
      <div className = "details-page">
        <div className = "container">
          <section className = "submenu">
          <div className = "direction">
          <div className = "prev">Prev</div>
          <div className = "next">Next</div>

          </div>

          <div className = "sub-links">
          </section>
        </div>
      </div>
    )
  }
}

