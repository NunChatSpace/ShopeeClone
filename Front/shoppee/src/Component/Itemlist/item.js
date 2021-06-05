import { Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './item.css'
export default class Item extends Component {

    toLocation = () => {
        return "/buy?id=" + this.props.data.id;
    }

    render() {
        return (
            <Grid item xs={2}>
                <Link className="navbar-text" to={this.toLocation()}>
                    <div className="box">
                        <div className="image-box">
                            <img src={this.props.data.previewList[0]} className="image" />
                        </div>
                        <div className="detail-box">
                            <div className="name-box">
                                <label className="name-label" style={{color:"black"}}>
                                    {this.props.data.name}
                                </label>
                            </div>
                            <div className="price-box">
                                <label className="price-label">
                                    ฿{this.props.data.price}
                                </label>
                                <label className="sold-item">
                                    ขายแล้ว {this.props.data.soleCount} ชิ้น
                        </label>
                            </div>
                        </div>
                    </div>
                </Link>

            </Grid>
        );
    }
}
