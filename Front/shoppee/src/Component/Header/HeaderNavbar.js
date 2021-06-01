import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, Grid } from '@material-ui/core';
import React, { Component, useReducer } from 'react';
import { connect } from 'react-redux';
import facebookLogo from '../../assets/icon/facebook-logo.png';
import instagramLogo from '../../assets/icon/instagram-logo.png';
import lineLogo from '../../assets/icon/line-logo.png';
import { AiOutlineBell, AiOutlineQuestionCircle } from 'react-icons/ai'
import { IconContext } from "react-icons";
import './HeaderNavbar.css'
import { headerReducer } from "../../Redux/reducers/header.reducer";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export class HeaderNavbar extends Component {

  getUsername = () => {
    const user = Cookies.get('userSession')
    return user ? JSON.parse(user) : user
  }

  logOut = () => {
    Cookies.remove('userSession')
  }

  loginNavbar = () => {
    const boxStyleWithBorder = {
      display: 'flex',
      borderRight: '2px solid hsla(0, 0%, 100%, 0.3)',
      justifyContent: 'center'
    };
    const boxStyle = {
      display: 'flex',
      justifyContent: 'center'
    };
    const iconStyle = { color: "white", size: "1.5em" }
    const user = this.getUsername();
    if (user) {
      return (
        <>
          <Grid item xs={2}>
            <a>
              <div style={boxStyle}>
                <IconContext.Provider value={iconStyle}>
                  <AiOutlineQuestionCircle />
                  <label className="navbar-text">{user.username}</label>
                </IconContext.Provider>
              </div>
            </a>
          </Grid>
          <Grid item xs={2}>
            <div style={boxStyle}>
              <Link className="navbar-text" to="/login" onClick={() => this.logOut()}>ออกจากระบบ</Link>
            </div>
          </Grid>
        </>
      )
    } else {
      return (
        <>
          <Grid item xs={2}>
            <div style={boxStyleWithBorder}>
              <Link className="navbar-text" to="/register">สมัครใหม่</Link>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div style={boxStyle}>
              <Link className="navbar-text" to="/login">เข้าสู่ระบบ</Link>
            </div>
          </Grid>
        </>
      )
    }
  }

  render() {
    const navbarStyle = {
      fontSize: "0.9em",
      color: "white",
      textDecoration: "none",
      textTransform: "none"
    }
    const boxStyleWithBorder = {
      display: 'flex',
      borderRight: '2px solid hsla(0, 0%, 100%, 0.3)',
      justifyContent: 'center'
    };
    const boxStyle = {
      display: 'flex',
      justifyContent: 'center'
    };
    const iconStyle = { color: "white", size: "1.5em" }

    return (
      <>
        <Grid container direction="row" alignItems="center" style={{ paddingTop: 5, paddingBottom: 20 }}>
          <Grid item xs={6}>
            <Grid container spacing={0} direction="row" justify="flex-start" alignItems="center">
              <Grid item xs={2}>
                <div style={boxStyleWithBorder}>
                  <a className="navbar-text" >Seller Centre</a>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div style={boxStyleWithBorder}>
                  <a className="navbar-text">ขายสินค้ากับช็อปปี้</a>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div style={boxStyleWithBorder}>
                  <a className="navbar-text">ดาวน์โหลด</a>
                </div>
              </Grid>
              <Grid item xs={5}>
                <Grid container direction="row" justify="center" alignItems="center" borderRight={1} borderColor="grey.500">
                  <Grid item xs={5}>
                    <div style={boxStyle}>
                      <label style={navbarStyle}>ติดตามเราบน</label>
                    </div>
                  </Grid>
                  <Grid item xs={1}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <img src={facebookLogo} alt="facebook" style={{ padding: 2 }} />
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <img src={instagramLogo} alt="instragram" style={{ padding: 2 }} />
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <img src={lineLogo} alt="line" style={{ padding: 2 }} />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={0} direction="row" justify="flex-end" alignItems="center">
              <Grid item xs></Grid>
              <Grid item xs={3}>
                <a>
                  <div style={boxStyle}>
                    <IconContext.Provider value={iconStyle}>
                      <AiOutlineBell />
                      <label className="navbar-text">การแจ้งเตือน</label>
                    </IconContext.Provider>
                  </div>
                </a>
              </Grid>
              <Grid item xs={2}>
                <a>
                  <div style={boxStyle}>
                    <IconContext.Provider value={iconStyle}>
                      <AiOutlineQuestionCircle />
                      <label className="navbar-text">ช่วยเหลือ</label>
                    </IconContext.Provider>
                  </div>
                </a>
              </Grid>
              {this.loginNavbar()}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = ({ headerReducer }) => ({ headerReducer })
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavbar);