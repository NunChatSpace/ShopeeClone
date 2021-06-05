import { Button, Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import ItemDetail from '../Common/ItemDetail/ItemDetail';
import { Header } from '../Header/Header';
import ImagePreview from '../ImagePreview/ImagePreview';
import { loadBuy } from '../../Redux/actions/buy.action';
import { connect } from 'react-redux';

export class Buy extends Component {

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    this.props.loadBuy({
      id: params.get('id')
    });
  }

  render() {
    var data = {}
    if(this.props.buyReducer.payload) {
      data = this.props.buyReducer.payload.data.data
    }
    return (
      <div>
        <div style={{ marginBottom: "2rem" }}>
          <Header />
        </div>
        <Container>
          <Grid container direction="row" spacing={2} style={{ backgroundColor: "white" }}>
            <Grid item xs={5}>
              <div style={{ height: "100%" }}>
                <ImagePreview data={data}/>
              </div>
            </Grid>
            <Grid item xs={7}>
              <div style={{ height: "100%" }}>
                <ItemDetail data={data}/>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = ({ buyReducer }) => ({ buyReducer });

const mapDispatchToProps = {
  loadBuy
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);