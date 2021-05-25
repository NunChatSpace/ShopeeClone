import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { Header } from '../Header/Header';
import Recommend from '../Recommend/Recommend';
import ad_9 from '../../assets/advertisement/ad_9.jpg';
import men_fa from '../../assets/categories/men-fashion.png';
import Categories from '../Common/Category/Categories';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ marginBottom: 10 }}>
                    <Header />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Recommend />
                </div>
                <div style={{ marginBottom: 10 }}>
                    <Container>
                        <a><img src={ad_9} style={{ width: "100%", height: "100%" }} alt={"ad_9"} /></a>
                        <Categories componentsInfo={[
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย1",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย2",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย3",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย4",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย5",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย6",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย7",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย8",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย9",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย10",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย11",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย12",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย13",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย14",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย15",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย16",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย17",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย18",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย19",
                                url: ""
                            },
                            {
                                image: "https://cf.shopee.co.th/file/0091cb7e7d970b10dcf233d2e4faf9b9_tn",
                                text: "เสื้อผ้าแฟชั่นผู้ชาย20",
                                url: ""
                            }
                        ]}/>
                    </Container>
                </div>
            </div>
        );
    }
}
