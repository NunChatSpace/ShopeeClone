import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, Grid, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import HeaderWhite from '../Header/HeaderWhite';
import { connect } from 'react-redux';
import { registerRequest, closeDialog, displayDialog, backToInitial } from '../../Redux/actions/register.action';
import { REGISTER_STATUS_SUCCESS } from '../../constants/constant';
import { Link } from 'react-router-dom';

export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            dialogMessage: '',
            displayErrorDialog: false,
        }
    }

    componentWillUnmount() {
        this.props.backToInitial()
    }

    register = (data) => {
        if (data.username && data.password) {
            this.props.registerRequest(data);
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

    showButton = () => {
        if (this.props.registerReducer.payload) {
            if (this.props.registerReducer.payload.data.status == REGISTER_STATUS_SUCCESS) {
                return (
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button color="primary">
                            OK
                        </Button>
                    </Link>
                )
            }
        }
        return (
            <Button onClick={() => this.closeDialog()} color="primary">
                OK
            </Button>
        )
    }

    render() {
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
                                                สมัครสมาชิก
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
                                                        this.register(
                                                            {
                                                                username: this.state.username,
                                                                password: this.state.password
                                                            }
                                                        )
                                                    }}
                                                >
                                                    <label style={{ color: "white" }}>
                                                        สมัครสมาชิก
                                                    </label>
                                                </Button>
                                            </form>
                                        </Container>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                    </Container>
                </div>

                <Dialog
                    open={this.props.registerReducer.isDisplay}
                    onClose={() => this.closeDialog()}
                >
                    <DialogContent>
                        <DialogContentText>
                            {this.props.registerReducer.dialogMessage}
                        </DialogContentText>
                        <DialogActions>
                            {this.showButton()}
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </>


        );
    }
}

const mapStateToProps = ({ registerReducer }) => ({ registerReducer });

const mapDispatchToProps = {
    registerRequest,
    closeDialog,
    displayDialog,
    backToInitial
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);