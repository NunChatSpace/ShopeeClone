import { Button, Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import './ItemDetail.css'
import TagCard from '../TagCard/TagCard';
import AmountItem from '../AmountItem/AmountItem';

String.prototype.insert = function (index, string) {
    if (index > 0) {
        return this.substring(0, index) + string + this.substr(index);
    }

    return string + this;
};

export default class ItemDetail extends Component {

    toCashWithCommand = (cash) => {
        if (cash.length > 6) {
            cash = cash.insert(cash.length - 3, ',')
            cash = cash.insert(cash.length - 7, ',')
            console.log(cash)
            return cash
        } else if (cash.length > 3) {
            cash = cash.insert(cash.length - 3, ',')
            console.log(cash)
            return cash
        }

        return cash;
    }

    toTagCard = (data) => {
        return (
            <TagCard data={data} />
        )
    }

    render() {
        if (this.props.data.id) {
            return (
                <div>
                    <label className='item-name-panel'>
                        {this.props.data.name}
                    </label>
                    <div className='rating-panel'>
                        <Container>
                            <div style={{ display: "flex" }}>
                                <div style={{ paddingRight: "1rem", borderRight: '2px solid hsla(0, 0%, 100%, 0.3)' }}>
                                    <div>
                                        <label style={{ color: "#ee4d2d", borderBottom: "1px solid #555", borderBottomColor: "#ee4d2d", fontSize: "1rem", marginRight: "5px" }}>
                                            {this.props.data.star}
                                        </label>
                                        <Rating
                                            readOnly
                                            name="size-small"
                                            defaultValue={this.props.data.star}
                                            size="small"
                                            precision={0.5}
                                            emptyIcon={<StarBorderIcon fontSize="inherit" style={{ color: "#ee4d2d" }} />}
                                            style={{ color: "#ee4d2d" }}
                                        />
                                    </div>
                                </div>
                                <div style={{ paddingRight: "1rem", borderRight: '2px solid hsla(0, 0%, 100%, 0.3)' }}>
                                    <div>
                                        <label style={{ color: "#222", borderBottom: "1px solid #555", fontSize: "1rem", marginRight: "5px" }}>
                                            {this.props.data.rate}
                                        </label>
                                        <label style={{ color: "#767676", fontSize: "0.875rem", marginRight: "5px", textTransform: "capitalize" }}>
                                            Ratings
                                    </label>
                                    </div>
                                </div>
                                <div style={{ paddingRight: "1rem", borderRight: '2px solid hsla(0, 0%, 100%, 0.3)' }}>
                                    <div>
                                        <label>{this.props.data.soleCount}</label>
                                        <label>ขายแล้ว </label>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div style={{ paddingBottom: "1rem", paddingTop: "2rem" }}>
                        <Container style={{ padding: "15px 20px", background: "#fafafa" }}>
                            <label style={{ color: "#ee4d2d", fontSize: "1.875rem", fontWeight: "500" }}>฿{this.toCashWithCommand(this.props.data.price.toString())}</label>
                        </Container>
                    </div>
                    <div style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
                        <Container>
                            <Grid container spacing={1}>
                                <Grid item xs={2}>
                                    <label style={{
                                        color: "#757575",
                                        fontSize: "0.875rem"
                                    }}>
                                        โค้ดส่วนลดจากร้านค้า
                                    </label>
                                </Grid>
                                <Grid item xs>
                                    {Array.from(Array(this.props.data.discount.length)).map((x, i) => this.toTagCard(this.props.data.discount[i]))}
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                    <div style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
                        <Container>
                            <Grid container>
                                <Grid item xs={2}>
                                    <label style={{
                                        color: "#757575",
                                        fontSize: "0.875rem"
                                    }}>
                                        Bundle Deals
                                    </label>
                                </Grid>
                                <Grid item xs>
                                    {Array.from(Array(this.props.data.bundleDeal.length)).map((x, i) => this.toTagCard(this.props.data.bundleDeal[i]))}
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                    <div style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
                        <Container>
                            <Grid container>
                                <Grid item xs={2}>
                                    <label style={{
                                        color: "#757575",
                                        fontSize: "0.875rem"
                                    }}>
                                        การจัดส่ง
                                    </label>
                                </Grid>
                                <Grid item xs>
                                    {Array.from(Array(this.props.data.delivery.length)).map((x, i) => this.toTagCard(this.props.data.delivery[i]))}
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                    <div style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
                        <Container>
                            <Grid container>
                                <Grid item xs={2}>
                                    <label style={{
                                        color: "#757575",
                                        fontSize: "0.875rem"
                                    }}>
                                        สี
                                    </label>
                                </Grid>
                                <Grid item xs>
                                    {Array.from(Array(this.props.data.color.length)).map((x, i) => this.toTagCard(this.props.data.color[i]))}
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                    <div style={{ paddingBottom: "1rem", paddingTop: "1rem" }}>
                        <Container>
                            <Grid container>
                                <Grid item xs={2}>
                                    <label style={{
                                        color: "#757575",
                                        fontSize: "0.875rem"
                                    }}>
                                        จำนวน
                                    </label>
                                </Grid>
                                <Grid item xs>
                                    <AmountItem data={this.props.amount}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                    <div>
                        <Button style={{
                            marginRight: "15px",
                            minWidth: "11.25rem",
                            padding: "0 0.75rem",
                            color: "#ee4d2d",
                            background: "rgba(255,87,34,.1)",
                            border: "1px solid #ee4d2d",
                            boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
                            height: "3rem"
                        }}>
                            <label>
                                เพิ่มไปยังรถเข็น
                            </label>
                        </Button>
                        <Button style={{
                            marginRight: "15px",
                            minWidth: "11.25rem",
                            padding: "0 0.75rem",
                            color: "white",
                            background: "#f05d40",
                            border: "1px solid #ee4d2d",
                            boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
                            height: "3rem"
                        }}>
                            <label >
                                ซื้อสินค้า
                            </label>
                        </Button>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    Loading ...
                </div>
            );
        }
    }
}
