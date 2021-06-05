import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import ImgHorizontalPreview from '../Common/ImgHorizontalPreview/ImgHorizontalPreview';
import './ImagePreview.css'
export default class ImagePreview extends Component {

    toImage = (src) => {
        return (
            <img
                className='img-horizontal'
                src={src}
            />
        )
    }
    render() {
        if (this.props.data.id) {
            return (
                <div>
                    <Grid container direction="row" alignItems="center" spacing={1}>
                        <Grid item xs={12}>
                            <img
                                className='img'
                                src={this.props.data.previewList[0]} />
                        </Grid>
                        <Grid item xs={12}>
                            <ImgHorizontalPreview>
                                {Array.from(Array(this.props.data.previewList.length)).map((x, i) => this.toImage(this.props.data.previewList[i]))}
                            </ImgHorizontalPreview>
                        </Grid>
                    </Grid>
                </div>
            )
        } else {
            return (
                <div>
                    Loading ...
                </div>
            )
        }
    }
}
