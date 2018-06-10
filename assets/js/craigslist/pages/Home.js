import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import categories from '../../../../data/categories.js'


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      categoriesData: categories
    }
    
  }

  componentWillMount(){
    const self = this;
    axios.get('/api/categories').then(function (response){
      self.setState({
        categoriesData: response.data
      }, () =>{
        console.log(self.state);

      })
      
    })
    .catch(function(error){
      console.log(error);
    })
  }
  clickedBtn = () => {
    console.log('swag')
  }
  loopCategories = () => {

    return this.state.categoriesData.map((category, i) => {
      return (
        <div className="categories" key = {i} >
        
          <div className="title">{category.title}</div>
          <div className="group-links">
            <a href="#" className="link">Community</a>
            <a href="#" className="link">General</a>
            <a href="#" className="link">Activities</a>
            <a href="#" className="link">Groups</a>
            <a href="#" className="link">Artists</a>
            <a href="#" className="link">Local News</a>
            <a href="#" className="link">Child Care</a>
            <a href="#" className="link">Lost & Found</a>
            <a href="#" className="link">Classes</a>
            <a href="#" className="link">Musician</a>
            <a href="#" className="link">Events</a>
            <a href="#" className="link">Pets</a>
          </div>
        </div>
      )
    })
  }

  loopTags = () => {
    let testTags = ['a', 'b', 'c', 'd','f','g', 'h']
    return testTags.map((item, i)=>
        <div key = {i} className = "tag">Apple macbook</div>

      
    )
  }
  render() {
    return (
      <div className = "home">
      <div className = "container">
        <h1>Connecting People <br /> Everywhere</h1>
        <section className={'links'}>
          {this.loopCategories()}
        </section>
        <section className={'trending'}>
          <input type="text" name="search" className="search" />
          <div className = "title">
          <i className="far fa-clock"></i> Trending Now
          </div>
          <div className = "trending-tags">
          {this.loopTags()}
          </div>
        </section>
        </div>
      </div>
    )
  }
}

