import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import './AmountItem.css'
export default class AmountItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: props.amount? props.amount: 0
        }
    }
    decrease = () => {
        if (this.state.amount > 0) {
            this.setState({
                amount: this.state.amount - 1
            })
        }
    }
    increase = () => {
        this.setState({
            amount: this.state.amount + 1
        })
    }
    render() {
        return (
            <div className='wrapper'>
                <Button className='amout-item-button' onClick={this.decrease}>
                    <label className='amout-item-label'>
                        -
                    </label>
                </Button>
                <div className='amout-item-wrapper'>
                    {this.state.amount}
                </div>
                <Button className='amout-item-button' onClick={this.increase}>
                    <label className='amout-item-label'>
                        +
                    </label>
                </Button>
            </div>
        );
    }
}
