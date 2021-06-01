import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Item from './item';

export default class ItemList extends Component {
    render() {
        return (
            <div>
                <Grid container direction="row" alignItems="center" spacing={1}>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Grid>
            </div>
        );
    }
}
