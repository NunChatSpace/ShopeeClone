import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopee from '../../assets/icon/shopee_orange.svg'

export default class HeaderWhite extends Component {
    render() {
        return (
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Grid container direction="row" alignItems="center">
                    <Grid item xs>
                        <img src={shopee} style={{ width: 162, height: 50 }}></img>
                    </Grid>
                    <Grid item xs />
                    <Grid item xs={2}>
                        <a style={{ color: "rgb(238, 77, 45)", fontSize: "0.875rem" }}>ต้องการความช่วยเหลือ?</a>
                    </Grid>
                </Grid>
            </Link>
        );
    }
}
