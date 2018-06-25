import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Ronny',
      categoriesData: ''
    }
    
  }

  componentWillMount(){
    



  }
  componentDidMount(){
    const{match, history} = this.props
    if(match.params.city == undefined){
      history.push('/los-angeles')
    }

    const self = this;
    axios.get(`/api/${match.params.city}`).then(function (response){
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
 
  loopCategories = () => {
    const {match, history} = this.props
    if(this.state.categoriesData != ''){
      return this.state.categoriesData.map((category, i) => {
        const loopListings = () =>{
         return category.listings.map((listing, index) =>{
           return (
             <Link to={`/${match.params.city}/${category.title}/${listing.slug}`}  key = {index}>{listing.name}
             </Link>
            
           )
         })

        }
        return (
          <div className="categories" key = {i} >
          
            <a href={`/${match.params.city}/${category.title}`} className="title">{category.title}</a>
            <div className={`group-links ${(category.title == 'for-sale' || category.title == 'jobs' || category.title == 'housing') ? 'single-col' : ''}`}>
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

