import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <div>
        <h1>Connecting People <br/> Everywhere</h1>
        <section className = {'links'}>
          <div className = "title">Community</div>
          <div className = "group-links">
          <a href = "#" className = "link">Community</a>
          <a href = "#" className = "link">General</a>
          <a href = "#" className = "link">Activities</a>
          <a href = "#" className = "link">Groups</a>
          <a href = "#" className = "link">Artists</a>
          <a href = "#" className = "link">Local News</a>
          <a href = "#" className = "link">Child Care</a>
          <a href = "#" className = "link">Lost & Found</a>
          <a href = "#" className = "link">Classes</a>
          <a href = "#" className = "link">Musician</a>
          <a href = "#" className = "link">Events</a>
          <a href = "#" className = "link">Pets</a>
          </div>






        </section>
      </div>
    )
  }
}
