import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

export default class Category extends Component {
    render() {
        const imgStyle = {
            maxWidth: "100%", maxHeight: "100%"
        }
        const labelStyle = {
            fontSize: "0.8em"
        }
        return (
            <a>
                <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                    <Grid item xs={8}>
                        <img src={this.props.image} style={imgStyle} />
                    </Grid>
                    <Grid item xs={12}>
                        <label style={labelStyle}>{this.props.text}</label>
                    </Grid>
                </Grid>
            </a>
        );
    }
}
