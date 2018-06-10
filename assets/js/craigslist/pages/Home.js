import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      categoriesData: ''
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
    if(this.state.categoriesData != ''){
      return this.state.categoriesData.map((category, i) => {
        const loopListings = () =>{
         return category.listings.map((listing, index) =>{
           return (
            <a href={`${category.title}/${listing.slug}`} className="link" key = {index}>
            {listing.name}
            </a>
           )
         })

        }
        return (
          <div className="categories" key = {i} >
          
            <div className="title">{category.title}</div>
            <div className="group-links">
            {loopListings()}
            </div>
          </div>
        )
      })
    }else{
      return 'LOADING'
    }
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

