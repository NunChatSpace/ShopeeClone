import { Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        console.log(this.props.src+ "1.jpg")
        return (
            <Grid item xs={2}>
                <div>
                    <div>
                        <img src={this.props.src + "/1.jpg"} style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div style={{height:"4rem"}}>
                        <label style={{ width: "100%", height: "100%", wordWrap:"break-word", maxHeight:"2rem"}}>
                            {this.props.name}
                        </label>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <label style={{ width: "100%", height: "100%", wordWrap:"break-word", color:"#ee4d2d", fontSize:"1rem"}}>
                            ฿{this.props.price}
                        </label>
                        <label style={{ width: "100%", height: "100%", wordWrap:"break-word", color:"rgba(0,0,0,.54)", fontSize:"0.75rem"}}>
                            ขายแล้ว {this.props.soleCount} ชิ้น
                        </label>
                    </div>
                </div>
            </Grid>
        );
    }
}
