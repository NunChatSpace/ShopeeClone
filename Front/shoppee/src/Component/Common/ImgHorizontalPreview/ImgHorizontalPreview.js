import React, { Component } from 'react';
import left from '../../../assets/icon/Left.svg'
import right from '../../../assets/icon/Right.svg'
import './ImgHorizontalPreview.css'

export default class ImgHorizontalPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    next = () => {
        if (this.state.index < (this.props.children.length - 1)) {
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
                index: this.props.children.length - 1
            })
        }
    }
    
    render() {
        return (
            <div>
                <div className="image-container">
                    <div className="image-wrapper">
                        <div className="image-content-wrapper">
                            <div className="image-content" style={{ transform: `translate(-${this.state.index * 25}%)` }}>
                                {this.props.children}
                            </div>
                        </div>
                        <button className="left-arrow" onClick={this.prev}>
                            <img src={left} />
                        </button>
                        <button className="right-arrow" onClick={this.next}>
                            <img src={right} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
