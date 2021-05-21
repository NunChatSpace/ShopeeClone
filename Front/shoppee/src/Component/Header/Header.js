import { Box, Button, Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderNavbar } from './HeaderNavbar';
import { HeaderSearchPanel } from './HeaderSearchPanel';
import { headerReducer } from "../../Redux/reducers/header.reducer";

export class Header extends Component {
    render() {
        return (
            <div style={{ background: "linear-gradient(#f53d2d, #f63)" }}>
                <Container>
                    <HeaderNavbar />
                    <HeaderSearchPanel />
                </Container>
            </div>
        );
    }
}



const mapStateToProps = ({ headerReducer }) => ({ headerReducer });

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(Header);