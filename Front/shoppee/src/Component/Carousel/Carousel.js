import React, { Component } from 'react';
import './Carousel.css';
import left from '../../assets/icon/Left.svg'
import right from '../../assets/icon/Right.svg'
import CarouselDot from './CarouselDot';
export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            intervalID: 0,
            children: props.children
        }
    }

    componentDidMount() {
        var intervalId = setInterval(this.next, 3000);
        // store intervalId in the state so it can be accessed later:
        this.setState({ intervalID: intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    next = () => {
        if (this.state.index < (this.state.children.length - 1)) {
            this.setState({
                index: this.state.index + 1
            })
        }
        else {
            this.setState({
                index: 0
            })
        }
    }

    prev = () => {
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1
            })
        }
        else {
            this.setState({
                index: this.state.children.length - 1
            })
        }
    }

    render() {
        console.log(this.state.children)
        return (
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <div className="carousel-content-wrapper">
                        <div className="carousel-content" style={{ transform: `translate(-${this.state.index * 100}%)` }}>
                            {this.state.children}
                        </div>
                    </div>
                    <button className="left-arrow" onClick={this.prev}>
                        <img src={left} />
                    </button>
                    <button className="right-arrow" onClick={this.next}>
                        <img src={right} />
                    </button>
                    <div className="carousel-dot-container">
                        {Array.from(Array(this.state.children.length)).map((x, index) => <CarouselDot value={index} activeIndex={this.state.index} />)}
                    </div>
                </div>
            </div>
        );
    }
}
