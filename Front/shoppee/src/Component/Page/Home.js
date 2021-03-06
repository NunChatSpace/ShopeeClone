import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { Header } from '../Header/Header';
import Recommend from '../Recommend/Recommend';
import ad_9 from '../../assets/advertisement/ad_9.jpg';
import Categories from '../Common/Category/Categories';
import ItemList from '../Itemlist/ItemList';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ marginBottom: 10 }}>
                    <Header />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Container style={{backgroundColor: 'white', padding:'1rem'}}>
                    <Recommend />
                    </Container>
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Container style={{backgroundColor: 'white', padding:'1rem'}}>
                        <a><img src={ad_9} style={{ width: "100%", height: "100%" }} alt={"ad_9"} /></a>
                        <Categories />
                    </Container>
                </div>

                <div style={{ marginBottom: 10 }}>
                    <Container style={{backgroundColor: 'white', padding:'1rem'}}>
                        <ItemList/>
                    </Container>
                </div>
            </div>
        );
    }
}
