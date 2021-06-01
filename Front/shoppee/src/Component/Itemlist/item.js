import { Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <Grid item xs={2}>
                <div>
                    <div>
                        <img src="https://cf.shopee.co.th/file/74a04ef761f87b44d99b4d2237ef346c" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div>
                        <label style={{ width: "100%", height: "100%", wordWrap:"break-word"}}>
                            item1234567891234567891234567899999999999999999999999999999999999999999999999999999999
                        </label>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <label style={{ width: "100%", height: "100%", wordWrap:"break-word"}}>
                            ฿123
                        </label>
                        <label style={{ width: "100%", height: "100%", wordWrap:"break-word"}}>
                            ขายแล้ว 0 ชิ้น
                        </label>
                    </div>
                </div>
            </Grid>
        );
    }
}
