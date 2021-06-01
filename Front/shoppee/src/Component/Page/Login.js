import { Button, Card, CardActions, CardContent, CardHeader, Container, Dialog, DialogActions, DialogContent, DialogContentText, Grid, InputLabel, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import facebookLogin from '../../assets/icon/facebook.png';
import googleLogin from '../../assets/icon/google.png';
import appleLogin from '../../assets/icon/apple.png'
import { Link } from 'react-router-dom';
import HeaderWhite from '../Header/HeaderWhite';
import { connect } from 'react-redux';
import { loginRequest, closeDialog, displayDialog, backToInitial } from '../../Redux/actions/login.action';
import Cookies from 'js-cookie';

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loginFailMessage: '',
            displayErrorDialog: false,
        }
    }

    componentWillUnmount() {
        this.props.backToInitial()
    }

    login = (data) => {
        if (data.username && data.password) {
            this.props.loginRequest(data);
        } else {
            this.props.displayDialog("Please input username or password")
        }

    }

    closeDialog = () => {
        this.props.closeDialog()
    }

    displayDialog = (data) => {
        this.props.displayDialog(data)
    }

    render() {
        if(this.props.loginReducer.payload){
            const cookieData = JSON.stringify({
                username: this.props.loginReducer.payload.data.username,
                token: this.props.loginReducer.payload.data.token
            })
            Cookies.set('userSession', cookieData, {
                expires: 1
            })
            
            this.props.history.push('/')
        }
        return (
            <>
                <Container>
                    <Grid container direction="row" alignItems="center" style={{ paddingTop: 5, paddingBottom: 20 }}>
                        <Grid item xs={12}>
                            <HeaderWhite />
                        </Grid>
                    </Grid>
                </Container>
                <div style={{ backgroundColor: "rgb(238, 77, 45)", borderRadius: 5 }}>
                    <Container>
                        <Grid container direction="row" alignItems="center" style={{ paddingTop: 5, paddingBottom: 20 }}>
                            <Grid item xs={6}>
                                <img src={'https://cf.shopee.co.th/file/74a04ef761f87b44d99b4d2237ef346c'} />
                            </Grid>
                            <Grid item xs></Grid>
                            <Grid item xs={4}>
                                <Grid container direction="row" alignItems="center" style={{ paddingTop: 5, paddingBottom: 20, backgroundColor: "white" }}>
                                    <Grid item xs={12} style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                                        <Container>
                                            <label style={{ maxWidth: "8.5rem", fontSize: "1.25rem", color: "rgb(34, 34, 34)", textTransform: "capitalize" }}>
                                                เข้าสู่ระบบ
                                            </label>
                                        </Container>
                                    </Grid>
                                    <Grid item xs={12} style={{ paddingBottom: "2rem" }}>
                                        <Container>
                                            <form autoComplete="off">
                                                <TextField
                                                    fullWidth
                                                    style={{ backgroundColor: "white", borderRadius: 5, paddingBottom: "1rem" }}
                                                    variant="outlined"
                                                    placeholder="ชื่อผู้ใช้"
                                                    value={this.state.username}
                                                    onChange={e => this.setState({
                                                        username: e.target.value
                                                    })}
                                                />
                                                <TextField
                                                    fullWidth
                                                    style={{ backgroundColor: "white", borderRadius: 5, paddingBottom: "1rem" }}
                                                    variant="outlined"
                                                    placeholder="รหัสผ่าน"
                                                    type="password"
                                                    value={this.state.password}
                                                    onChange={e => this.setState({
                                                        password: e.target.value
                                                    })}
                                                />
                                                <Button
                                                    style={{ backgroundColor: "rgb(238, 77, 45)", width: "100%" }}
                                                    onClick={() => {
                                                        this.login(
                                                            {
                                                                username: this.state.username,
                                                                password: this.state.password
                                                            }
                                                        )
                                                    }}
                                                >
                                                    <label style={{ color: "white" }}>
                                                        เข้าสู่ระบบ
                                                    </label>
                                                </Button>
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <a style={{ color: "rgb(0, 85, 170)", fontSize: "0.75rem" }}>ลืมรหัสผ่าน</a>
                                                    <a style={{ color: "rgb(0, 85, 170)", fontSize: "0.75rem" }}>เข้าาสู่ระบบด้วย SMS</a>
                                                </div>
                                            </form>

                                        </Container>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Container>
                                            <div style={{ display: "flex", paddingBottom: "0.875rem", alignItems: "center" }}>
                                                <div style={{ height: "1px", width: "100%", backgroundColor: "rgb(219, 219, 219)", flex: "1 1 0%" }}></div>
                                                <div>
                                                    <a style={{ color: "rgb(204, 204, 204)", padding: "1rem", fontSize: "0.75rem" }}>หรือ</a>
                                                </div>
                                                <div style={{ height: "1px", width: "100%", backgroundColor: "rgb(219, 219, 219)", flex: "1 1 0%" }}></div>
                                            </div>
                                        </Container>
                                    </Grid>
                                    <Grid item xs={12} style={{ paddingBottom: "2rem" }}>
                                        <Container>
                                            <Grid container direction="row" alignItems="center" spacing={1}>
                                                <Grid xs style={{ margin: "1px" }}>
                                                    <Button style={{ display: "flex", height: "2.5rem", backgroundColor: "rgb(24, 119, 242)", width: "100%" }}>
                                                        <img src={facebookLogin} style={{ height: "2rem", paddingRight: "1rem" }}></img>
                                                        <label style={{ color: "white", textTransform: "none" }}> Facebook </label>
                                                    </Button>
                                                </Grid>
                                                <Grid xs style={{ margin: "1px" }}>
                                                    <Button style={{ display: "flex", height: "2.5rem", backgroundColor: "rgb(24, 119, 242)", width: "100%" }}>
                                                        <img src={googleLogin} style={{ height: "2rem", backgroundColor: "white" }}></img>
                                                        <label style={{ color: "white", textTransform: "none", paddingLeft: "1rem" }}> Google </label>
                                                    </Button>
                                                </Grid>
                                                <Grid xs style={{ margin: "1px" }}>
                                                    <Button style={{ display: "flex", height: "2.5rem", backgroundColor: "black", width: "100%" }}>
                                                        <img src={appleLogin} style={{ height: "2rem", paddingRight: "1rem" }}></img>
                                                        <label style={{ color: "white", textTransform: "none" }}> Apple </label>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Container>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <label style={{ color: "rgba(0, 0, 0, 0.26)", paddingRight: "0.25rem", fontSize: "0.875rem" }}>
                                                    เพิ่งเคยเข้ามาใน Shopee ใช่หรือไม่
                                                    <Link style={{ color: "rgb(238, 77, 45)", padding: "1rem", textDecoration: "none" }} to="/Register">
                                                        สมัครใหม่
                                                    </Link>
                                                </label>
                                            </div>
                                        </Container>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                    </Container>
                </div>
                <Dialog
                    open={this.props.loginReducer.isDisplay}
                    onClose={() => this.closeDialog()}
                >
                    <DialogContent>
                        <DialogContentText>
                            {this.props.loginReducer.dialogMessage}
                        </DialogContentText>
                        <DialogActions>
                            <Button onClick={() => this.closeDialog()} color="primary">
                                OK
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </>


        );
    }
}

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });

const mapDispatchToProps = {
    loginRequest,
    closeDialog, 
    displayDialog, 
    backToInitial
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);