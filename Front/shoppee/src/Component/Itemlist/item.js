import { Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import './item.css'
export default class Item extends Component {
    render() {
        return (
            <Grid item xs={2}>
                <div className="box">
                    <div className="image-box">
                        <img src={this.props.src + "/1.jpg"} className="image" />
                    </div>
                    <div className="detail-box">
                        <div className="name-box">
                            <label className="name-label">
                                {this.props.name}
                            </label>
                        </div>
                        <div className="price-box">
                            <label className="price-label">
                                ฿{this.props.price}
                            </label>
                            <label className="sold-item">
                                ขายแล้ว {this.props.soleCount} ชิ้น
                        </label>
                        </div>
                    </div>
                </div>
            </Grid>
        );
    }
}
