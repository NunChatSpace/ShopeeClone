import {Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Item from './item';
import {loadItemList} from '../../Redux/actions/itemlist.action'

export class ItemList extends Component {
    componentDidMount() {
        this.props.loadItemList()
    }

    toItem = (data) => {
        return (
            <Item data={data}/>
        )
    }

    render() {
        var itemlistData = []
        if(this.props.itemlistReducer.payload) {
            itemlistData = this.props.itemlistReducer.payload.data.data
        }
        return (
            <div>
                <Grid container direction="row" alignItems="center" spacing={1}>
                {Array.from(Array(itemlistData.length)).map((x, i) => this.toItem(itemlistData[i]))}
                </Grid>
            </div>
        );
    }
}


const mapStateToProps = ({itemlistReducer}) => ({itemlistReducer});
const mapDispatchToProps = {
    loadItemList
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);