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
          <div className = "white-box">
          <section className = "submenu">
          <div className = "direction">
          <a href = "#" className = "prev">Prev</a>
          <a href = "#" className = "next">Next</a>

          </div>

          <nav className = "sub-links">
          <a href = "#">More Ads by User</a>
          <a href = "#">Print</a>
          <a href = "#">Share</a>
          <a href = "#">Contact Seller</a>

          </nav>
          </section>

          <section className = "content-area">
          <div className = "media-column">
            <div className = "gallery">
            <div className = "slider">
            <div className = "main-image">
            <div className = "arrows left-arrow">{"<"}</div>
            <div className = " arrows right-arrow">{">"}</div>
            <div className = "image-1" style = {{
                "backgroundImage": "url('https://img.autobytel.com/car-reviews/autobytel/11694-good-looking-sports-cars/2016-Ford-Mustang-GT-burnout-red-tire-smoke.jpg')"  }}>
              </div>
            </div>
            </div>
            <div className = "thumbnails">
              <div className = "thumb-img" style = {{
                "backgroundImage": "url('https://img.autobytel.com/car-reviews/autobytel/11694-good-looking-sports-cars/2016-Ford-Mustang-GT-burnout-red-tire-smoke.jpg')"  }}>
              
              </div>
              <div className = "thumb-img" style = {{
                "backgroundImage": "url('https://img.autobytel.com/car-reviews/autobytel/11694-good-looking-sports-cars/2016-Ford-Mustang-GT-burnout-red-tire-smoke.jpg')"  }}>
              
              </div>
              <div className = "thumb-img" style = {{
                "backgroundImage": "url('https://img.autobytel.com/car-reviews/autobytel/11694-good-looking-sports-cars/2016-Ford-Mustang-GT-burnout-red-tire-smoke.jpg')"  }}>
              
              </div>
              <div className = "thumb-img" style = {{
                "backgroundImage": "url('https://img.autobytel.com/car-reviews/autobytel/11694-good-looking-sports-cars/2016-Ford-Mustang-GT-burnout-red-tire-smoke.jpg')"  }}>
              
              </div>
              <div className = "thumb-img" style = {{
                "backgroundImage": "url('https://img.autobytel.com/car-reviews/autobytel/11694-good-looking-sports-cars/2016-Ford-Mustang-GT-burnout-red-tire-smoke.jpg')"  }}>
              
              </div>
              <div className = "thumb-img" style = {{
                "backgroundImage": "url('https://img.autobytel.com/car-reviews/autobytel/11694-good-looking-sports-cars/2016-Ford-Mustang-GT-burnout-red-tire-smoke.jpg')"  }}>
              
              </div>
            </div>
            </div>
          </div>
          <div className = "details-column">
          <div className = "date">Posted: June 6th</div>
          <h3 className="title"> Red Dodge Challenger</h3>
          <h4 className = "price"> $50,000
          </h4>
          <div className ="more-details">
          <div className = "info">
          <label>VIN</label>
          <h5>WYYUHK756GHBB89CHJ</h5>
          </div>
          <div className = "info">
          <label>Mileage</label>
          <h5>4567</h5>
          </div>
          <div className = "info">
          <label>Transmission</label>
          <h5>Manual</h5>
          </div>
          <div className = "info">
          <label>VIN</label>
          <h5>WYYUHK756GHBB89CHJ</h5>
          </div>
          <div className = "info">
          <label>Mileage</label>
          <h5>4567</h5>
          </div>
          <div className = "info">
          <label>Transmission</label>
          <h5>Manual</h5>
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

