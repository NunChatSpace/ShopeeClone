import { Box, Button, Container, Grid, InputAdornment, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shopee from '../../assets/icon/shopee.svg';
import { headerReducer } from "../../Redux/reducers/header.reducer";
import { BiCart } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

export class HeaderSearchPanel extends Component {
    render() {
        const labelStyle = {
            fontSize: "0.8em",
            color: "white",
            textDecoration: "none",
            textTransform: "none",
            paddingRight: 10
        };
        const buttonStyle = {
            background: "linear-gradient(#f53d2d, #f63)",
            marginRight: 3
        }
        const iconStyle = { color: "white", size: "3em" }
        const iconSearchStyle = { color: "white", size: "2em" }
        return (
            <Grid container>
                <Grid container direction="row" alignItems="center">
                    <Grid item xs={2}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <img src={shopee} style={{ width: 162, height: 50 }}></img>
                        </Link>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    style: {
                                        height: "3em"
                                    },
                                    endAdornment: <InputAdornment position="end">
                                        <Button style={buttonStyle}>
                                            <IconContext.Provider value={iconSearchStyle}>
                                                <AiOutlineSearch />
                                            </IconContext.Provider>
                                        </Button>
                                    </InputAdornment>,
                                }}
                                style={{ backgroundColor: "white", borderRadius: 5 }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Button>
                            <IconContext.Provider value={iconStyle}>
                                <BiCart />
                            </IconContext.Provider>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" style={{ marginBottom: 10 }}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={9}>
                        <a style={labelStyle}>ชุดนอน</a>
                        <a style={labelStyle}>กางเกงชั้นใน</a>
                        <a style={labelStyle}>เสื้อยืด</a>
                        <a style={labelStyle}>ชั้นวางของ</a>
                        <a style={labelStyle}>กระเป๋าสะพายข้าง</a>
                        <a style={labelStyle}>แมส</a>
                        <a style={labelStyle}>เสื้อครอป</a>
                        <a style={labelStyle}>รองเท้าแตะ</a>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Grid>
        );
    }
}


const mapStateToProps = ({ headerReducer }) => ({ headerReducer })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchPanel);