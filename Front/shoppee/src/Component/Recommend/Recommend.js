import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Carousel from '../Common/Carousel/Carousel';
import Category from '../Common/Category/Category';
import { connect } from 'react-redux';
import { loadAdvertisement } from '../../Redux/actions/advertisement.action';
import { loadRecommend } from '../../Redux/actions/recommend.action';

export class Recommend extends Component {

  componentDidMount() {
    this.props.loadAdvertisement();
    this.props.loadRecommend();
  }

  toAdvertisement = (data, imgStyle) => {
    return (<img src={data.image} style={imgStyle} alt={data.text} />)
  }

  toRecommend = (data) => {
    return (
      <Grid item xs>
        <Category image={data.image} text={data.text} />
      </Grid>
    )
  }

  render() {
    const imgStyle = {
      maxWidth: "100%", maxHeight: "100%"
    }

    var recommendData = []
    var advertisementData = []

    if (this.props.recommendReducer.payload) {
      recommendData = this.props.recommendReducer.payload.data.data
    }

    if (this.props.advertisementReducer.payload) {
      advertisementData = this.props.advertisementReducer.payload.data.data
    }

    return (
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item xs={12} sm={8}>
          <Carousel>
            {Array.from(Array(advertisementData.length)).map((x, i) => this.toAdvertisement(advertisementData[i], imgStyle))}
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={6} sm={12}>
              <img src={"http://localhost:8080/static/advertisement/ad_7.jpg"} style={imgStyle} alt={"ad_7"} />
            </Grid>
            <Grid item xs={6} sm={12}>
              <img src={"http://localhost:8080/static/advertisement/ad_8.jpg"} style={imgStyle} alt={"ad_8"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" alignItems="center" spacing={2}>
            {Array.from(Array(recommendData.length)).map((x, i) => this.toRecommend(recommendData[i]))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ recommendReducer, advertisementReducer }) => ({ recommendReducer, advertisementReducer });

const mapDispatchToProps = {
  loadRecommend,
  loadAdvertisement
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);