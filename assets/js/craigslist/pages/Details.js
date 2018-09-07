//This is after you pick a car from categories.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Gallery from './components/Gallery.js';
import axios from 'axios'


export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }



  componentDidMount(){
    const{match, history} = this.props
    const self = this;
    axios.get(`/api/${match.params.city}/${match.params.category}`).then(function (response){
      self.setState({
        itemsData: response.data
      }, () =>{
        console.log(self.state);

      })
      
    })
    .catch(function(error){
      console.log(error);
    })
  }


  getItem = () => {
    const {match, history} = this.props
    if(this.state.itemsData != undefined){
      const carOne = this.state.itemsData[0];
      const carTwo = this.state.itemsData[1];
      const carThree = this.state.itemsData[2];
      const carFour = this.state.itemsData[3];


      if(match.params.details === carOne.title){
      
        return (
          <div className = "details-page">
        <div className = "container">
          <div className = "white-box">
          <section className = "submenu">
          <div className = "direction">
          <a href = "#" className = "prev">Prev</a>
          <a href = "#" className = "next">Next</a>

          </div>
          {console.log(match.params)}
          <nav className = "sub-links">
          <a href = "#">More Ads by User</a>
          <a href = "#">Print</a>
          <a href = "#">Share</a>
          <a href = "#">Contact Seller</a>

          </nav>
          </section>

          <section className = "content-area">
          <div className = "media-column">
            <Gallery itemsPic = {carOne} />
          </div>
          <div className = "details-column">
          <div className = "date">Posted: June 6th</div>
          <h3 className="title">{carOne.title}</h3>
          <h4 className = "price">{carOne.price}
          </h4>
          <div className ="more-details">
            <div className = "info">
            <label>VIN</label>
            <h5>{carOne.extraDetails.vin}</h5>
            </div>
            <div className = "info">
            <label>Mileage</label>
            <h5>{carOne.extraDetails.miles}</h5>
            </div>
            <div className = "info">
            <label>Transmission</label>
            <h5>{carOne.extraDetails.transmission}</h5>
            </div>
            
            
            
            </div>
          <div className = "description">
          <label>Description</label>
            <p>Lorem ipsum dolor amet vHS neutra unicorn marfa lomo crucifix tousled selfies palo santo. Banjo ugh health goth master cleanse put a bird on it paleo poke actually ennui franzen jean shorts pitchfork vice pop-up yr. Raclette blue bottle man bun biodiesel edison bulb. Distillery vexillologist franzen pug pop-up, blog mumblecore adaptogen meggings glossier ethical unicorn. Cliche godard coloring book hella, hell of seitan keffiyeh pok pok gluten-free butcher hammock echo park food truck blue bottle. Direct trade ennui cloud bread pour-over, offal kogi ramps humblebrag. Vexillologist everyday carry tumeric chicharrones narwhal dreamcatcher, farm-to-table migas artisan poutine kitsch hexagon gluten-free wolf keffiyeh.</p>
            <p>Lorem ipsum dolor amet vHS neutra unicorn marfa lomo crucifix tousled selfies palo santo. Banjo ugh health goth master cleanse put a bird on it paleo poke actually ennui franzen jean shorts pitchfork vice pop-up yr. Raclette blue bottle man bun biodiesel edison bulb. Distillery vexillologist franzen pug pop-up, blog mumblecore adaptogen meggings glossier ethical unicorn. Cliche godard coloring book hella, hell of seitan keffiyeh pok pok gluten-free butcher hammock echo park food truck blue bottle. Direct trade ennui cloud bread pour-over, offal kogi ramps humblebrag. Vexillologist everyday carry tumeric chicharrones narwhal dreamcatcher, farm-to-table migas artisan poutine kitsch hexagon gluten-free wolf keffiyeh.</p>
          </div>
          </div>
          </section>
        </div>
        </div>
      </div>
        )
      
    }else if(match.params.details === carTwo.title){
        
          return (
            <div className = "details-page">
          <div className = "container">
            <div className = "white-box">
            <section className = "submenu">
            <div className = "direction">
            <a href = "#" className = "prev">Prev</a>
            <a href = "#" className = "next">Next</a>
  
            </div>
            {console.log(match.params)}
            <nav className = "sub-links">
            <a href = "#">More Ads by User</a>
            <a href = "#">Print</a>
            <a href = "#">Share</a>
            <a href = "#">Contact Seller</a>
  
            </nav>
            </section>
  
            <section className = "content-area">
            <div className = "media-column">
              <Gallery itemsPic = {carTwo}/>
            </div>
            <div className = "details-column">
            <div className = "date">Posted: June 6th</div>
            <h3 className="title">{carTwo.title}</h3>
            <h4 className = "price">{carTwo.price}
            </h4>
            <div className ="more-details">
            <div className = "info">
            <label>VIN</label>
            <h5>{carTwo.extraDetails.vin}</h5>
            </div>
            <div className = "info">
            <label>Mileage</label>
            <h5>{carTwo.extraDetails.miles}</h5>
            </div>
            <div className = "info">
            <label>Transmission</label>
            <h5>{carTwo.extraDetails.transmission}</h5>
            </div>
            
            
            
            </div>
            <div className = "description">
            <label>Description</label>
              <p>Lorem ipsum dolor amet vHS neutra unicorn marfa lomo crucifix tousled selfies palo santo. Banjo ugh health goth master cleanse put a bird on it paleo poke actually ennui franzen jean shorts pitchfork vice pop-up yr. Raclette blue bottle man bun biodiesel edison bulb. Distillery vexillologist franzen pug pop-up, blog mumblecore adaptogen meggings glossier ethical unicorn. Cliche godard coloring book hella, hell of seitan keffiyeh pok pok gluten-free butcher hammock echo park food truck blue bottle. Direct trade ennui cloud bread pour-over, offal kogi ramps humblebrag. Vexillologist everyday carry tumeric chicharrones narwhal dreamcatcher, farm-to-table migas artisan poutine kitsch hexagon gluten-free wolf keffiyeh.</p>
              <p>Lorem ipsum dolor amet vHS neutra unicorn marfa lomo crucifix tousled selfies palo santo. Banjo ugh health goth master cleanse put a bird on it paleo poke actually ennui franzen jean shorts pitchfork vice pop-up yr. Raclette blue bottle man bun biodiesel edison bulb. Distillery vexillologist franzen pug pop-up, blog mumblecore adaptogen meggings glossier ethical unicorn. Cliche godard coloring book hella, hell of seitan keffiyeh pok pok gluten-free butcher hammock echo park food truck blue bottle. Direct trade ennui cloud bread pour-over, offal kogi ramps humblebrag. Vexillologist everyday carry tumeric chicharrones narwhal dreamcatcher, farm-to-table migas artisan poutine kitsch hexagon gluten-free wolf keffiyeh.</p>
            </div>
            </div>
            </section>
          </div>
          </div>
        </div>
          )
        
      }else if(match.params.details === carThree.title){
        
          return (
            <div className = "details-page">
          <div className = "container">
            <div className = "white-box">
            <section className = "submenu">
            <div className = "direction">
            <a href = "#" className = "prev">Prev</a>
            <a href = "#" className = "next">Next</a>
  
            </div>
            {console.log(match.params)}
            <nav className = "sub-links">
            <a href = "#">More Ads by User</a>
            <a href = "#">Print</a>
            <a href = "#">Share</a>
            <a href = "#">Contact Seller</a>
  
            </nav>
            </section>
  
            <section className = "content-area">
            <div className = "media-column">
              <Gallery itemsPic = {carThree}/>
            </div>
            <div className = "details-column">
            <div className = "date">Posted: June 6th</div>
            <h3 className="title">{carThree.title}</h3>
            <h4 className = "price">{carThree.price}
            </h4>
            <div className ="more-details">
            <div className = "info">
            <label>VIN</label>
            <h5>{carThree.extraDetails.vin}</h5>
            </div>
            <div className = "info">
            <label>Mileage</label>
            <h5>{carThree.extraDetails.miles}</h5>
            </div>
            <div className = "info">
            <label>Transmission</label>
            <h5>{carThree.extraDetails.transmission}</h5>
            </div>
            
            
            
            </div>
            <div className = "description">
            <label>Description</label>
              <p>Lorem ipsum dolor amet vHS neutra unicorn marfa lomo crucifix tousled selfies palo santo. Banjo ugh health goth master cleanse put a bird on it paleo poke actually ennui franzen jean shorts pitchfork vice pop-up yr. Raclette blue bottle man bun biodiesel edison bulb. Distillery vexillologist franzen pug pop-up, blog mumblecore adaptogen meggings glossier ethical unicorn. Cliche godard coloring book hella, hell of seitan keffiyeh pok pok gluten-free butcher hammock echo park food truck blue bottle. Direct trade ennui cloud bread pour-over, offal kogi ramps humblebrag. Vexillologist everyday carry tumeric chicharrones narwhal dreamcatcher, farm-to-table migas artisan poutine kitsch hexagon gluten-free wolf keffiyeh.</p>
              <p>Lorem ipsum dolor amet vHS neutra unicorn marfa lomo crucifix tousled selfies palo santo. Banjo ugh health goth master cleanse put a bird on it paleo poke actually ennui franzen jean shorts pitchfork vice pop-up yr. Raclette blue bottle man bun biodiesel edison bulb. Distillery vexillologist franzen pug pop-up, blog mumblecore adaptogen meggings glossier ethical unicorn. Cliche godard coloring book hella, hell of seitan keffiyeh pok pok gluten-free butcher hammock echo park food truck blue bottle. Direct trade ennui cloud bread pour-over, offal kogi ramps humblebrag. Vexillologist everyday carry tumeric chicharrones narwhal dreamcatcher, farm-to-table migas artisan poutine kitsch hexagon gluten-free wolf keffiyeh.</p>
            </div>
            </div>
            </section>
          </div>
          </div>
        </div>
          )
        
      
    }else{
      if(match.params.details === carFour.title){
        
        return (
          <div className = "details-page">
        <div className = "container">
          <div className = "white-box">
          <section className = "submenu">
          <div className = "direction">
          <a href = "#" className = "prev">Prev</a>
          <a href = "#" className = "next">Next</a>

          </div>
          {console.log(match.params)}
          <nav className = "sub-links">
          <a href = "#">More Ads by User</a>
          <a href = "#">Print</a>
          <a href = "#">Share</a>
          <a href = "#">Contact Seller</a>

          </nav>
          </section>

          <section className = "content-area">
          <div className = "media-column">
            <Gallery itemsPic = {carFour}/>
          </div>
          <div className = "details-column">
          <div className = "date">Posted: June 6th</div>
          <h3 className="title">{carFour.title}</h3>
          <h4 className = "price">{carFour.price}
          </h4>
          <div className ="more-details">
          <div className = "info">
          <label>VIN</label>
          <h5>{carFour.extraDetails.vin}</h5>
          </div>
          <div className = "info">
          <label>Mileage</label>
          <h5>{carFour.extraDetails.miles}</h5>
          </div>
          <div className = "info">
          <label>Transmission</label>
          <h5>{carFour.extraDetails.transmission}</h5>
          </div>
          
          
          
          </div>
          <div className = "description">
          <label>Description</label>
            <p>Lorem ipsum dolor amet vHS neutra unicorn marfa lomo crucifix tousled selfies palo santo. Banjo ugh health goth master cleanse put a bird on it paleo poke actually ennui franzen jean shorts pitchfork vice pop-up yr. Raclette blue bottle man bun biodiesel edison bulb. Distillery vexillologist franzen pug pop-up, blog mumblecore adaptogen meggings glossier ethical unicorn. Cliche godard coloring book hella, hell of seitan keffiyeh pok pok gluten-free butcher hammock echo park food truck blue bottle. Direct trade ennui cloud bread pour-over, offal kogi ramps humblebrag. Vexillologist everyday carry tumeric chicharrones narwhal dreamcatcher, farm-to-table migas artisan poutine kitsch hexagon gluten-free wolf keffiyeh.</p>
            <p>Lorem ipsum dolor amet vHS neutra unicorn marfa lomo crucifix tousled selfies palo santo. Banjo ugh health goth master cleanse put a bird on it paleo poke actually ennui franzen jean shorts pitchfork vice pop-up yr. Raclette blue bottle man bun biodiesel edison bulb. Distillery vexillologist franzen pug pop-up, blog mumblecore adaptogen meggings glossier ethical unicorn. Cliche godard coloring book hella, hell of seitan keffiyeh pok pok gluten-free butcher hammock echo park food truck blue bottle. Direct trade ennui cloud bread pour-over, offal kogi ramps humblebrag. Vexillologist everyday carry tumeric chicharrones narwhal dreamcatcher, farm-to-table migas artisan poutine kitsch hexagon gluten-free wolf keffiyeh.</p>
          </div>
          </div>
          </section>
        </div>
        </div>
      </div>
        )
      
    
  }







    }
  }
  }


  
  render() {
    const{match, location, history} = this.props
    const items = this.state.itemsData;
    return (
      <div className = "details-page">

      {this.getItem()}
              </div>
    )
  }
}

