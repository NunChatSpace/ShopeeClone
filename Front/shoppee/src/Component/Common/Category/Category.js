import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

export default class Category extends Component {
    render() {
        const imgStyle = {
            maxWidth: "100%", maxHeight: "100%"
        }
        const labelStyle = {
            display: "block",
            fontSize: "0.8em",
            textAlign: "center"
        }

        const onClick = () => {
            console.log(this.props.text)
        }

        return (
            <a onClick={onClick}>
                <Grid container direction="row" alignItems="center" justify="center" spacing={1} style={this.props.style? this.props.style: {}}>
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
