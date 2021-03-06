import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'




export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      allImgs: '',
      currentImg:'',
      currentIndex: 0
    }
  }

 




    
  
  componentWillMount(){
    // const allImgs =['https://images.craigslist.org/00I0I_fA6pqL5Xh3h_600x450.jpg',
    // 'https://images.craigslist.org/00W0W_jM9u9Fg2HfB_600x450.jpg',
    // 'https://images.craigslist.org/00I0I_gg4oMQaH7zt_600x450.jpg',
    // 'https://images.craigslist.org/00x0x_hByB2A3KRP6_600x450.jpg',
    // 'https://images.craigslist.org/00s0s_aRlNEFmxDzY_600x450.jpg',
    // 'https://images.craigslist.org/00k0k_8rDbQqgbekx_600x450.jpg'
    // ]
    const allImgs = this.props.itemsPic.images;
    this.setState({
      allImgs,
      currentImg:allImgs[this.state.currentIndex]
    })
  }



  allImgsLoop = () =>{

    return this.state.allImgs.map((item,i) =>{
      return(
        <div key = {i} onClick = {this.clickedThumb.bind(null, i)} className = "thumb-img" style = {{
          "backgroundImage": `url(${item})`  }}>
        
        </div>
      )
    })
  }
  nextBtn = () =>{
    if(this.state.currentIndex != (this.state.allImgs.length -1)){
      this.setState({
        currentIndex: this.state.currentIndex +1
      })
    }
     
  }
  prevBtn = () =>{
        if(this.state.currentIndex != 0){
          this.setState({
            currentIndex: this.state.currentIndex - 1
          })


        }
  }

  clickedThumb=(index)=>{
    
      this.setState({
        currentIndex: index
      })


    
  }

  render() {

    return(

            
            <div className = "gallery">
            <div className = "slider">
            <div className = "main-image">
            <div className = "arrows left-arrow" onClick = {this.prevBtn}><i className="fas fa-chevron-left"></i></div>
            <div className = " arrows right-arrow" onClick = {this.nextBtn}><i className="fas fa-chevron-right"></i></div>
            <div className = "image-1" style = {{
                "backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`  }}>
              </div>
            </div>
            </div>
            <div className = "thumbnails">
              {this.allImgsLoop()}
              {console.log(this.props.itemsPic.images)}
            </div>
            </div>
        
    )
  }
}

