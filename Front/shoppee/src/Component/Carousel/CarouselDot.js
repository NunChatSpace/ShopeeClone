import React, { Component } from 'react';
import './Carousel.css'

export default class CarouselDot extends Component {
  render() {
      const component = this.props.value == this.props.activeIndex? (<div className="carousel-dot-active"></div>): <div className="carousel-dot"></div>
    return ( component );
  }
}
