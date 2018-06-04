import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Header extends Component {
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
    return (<header>
     <div className = {'left-menu'}>
     <div className = {'logo'}>Ronnyslist</div>
     <div className = {'city'}>Los Angeles
     <i className={`fas fa-caret-down`}></i>
     </div>
     </div>

     <div className = {'right-menu'}>
     <div className = {'user-img'}>img</div>
     <div className = {'user-dropdown'}>my account
     <i className={`fas fa-caret-down`}></i>
     </div>
     <div className = {'post-btn'}>post to classifieds</div>

     </div>
    </header>)
  }
}

