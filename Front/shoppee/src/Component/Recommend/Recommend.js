import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import ad_1 from '../../assets/advertisement/ad_1.jpg';
import ad_2 from '../../assets/advertisement/ad_2.jpg';
import ad_3 from '../../assets/advertisement/ad_3.jpg';
import ad_4 from '../../assets/advertisement/ad_4.jpg';
import ad_5 from '../../assets/advertisement/ad_5.jpg';
import ad_6 from '../../assets/advertisement/ad_6.jpg';
import ad_7 from '../../assets/advertisement/ad_7.jpg';
import ad_8 from '../../assets/advertisement/ad_8.jpg';
import iconShippingFree from '../../assets/icon/icon-shipping-free.png';
import iconAllVoucher from '../../assets/icon/icon-all-voucher.png';
import iconCampaings from '../../assets/icon/icon-campaigns.png';
import iconDiscountBrand from '../../assets/icon/icon-discount-brand.png';
import iconElectronics from '../../assets/icon/icon-electronics.png';
import iconFashionZone from '../../assets/icon/icon-fashion-zone.png';
import iconGamerZone from '../../assets/icon/icon-gamer-zone.png';
import iconPartnerShip from '../../assets/icon/icon-partner-ship.png';
import iconShopeeCoin from '../../assets/icon/icon-shopee-coin.png';
import iconShopeeMart from '../../assets/icon/icon-shopee-mart.png';
import Carousel from '../Common/Carousel/Carousel';
import Category from '../Common/Category/Category';


export default class Recommend extends Component {
  render() {
    const imgStyle = {
      maxWidth: "100%", maxHeight: "100%"
    }
    return (
      <Container>
        <Grid container direction="row" alignItems="center" spacing={1}>
          <Grid item xs={12} sm={8}>
            <Carousel>
              <img src={ad_1} style={imgStyle} alt={"ad_1"}/>
              <img src={ad_2} style={imgStyle} alt={"ad_2"}/>
              <img src={ad_3} style={imgStyle} alt={"ad_3"}/>
              <img src={ad_4} style={imgStyle} alt={"ad_4"}/>
              <img src={ad_5} style={imgStyle} alt={"ad_5"}/>
              <img src={ad_6} style={imgStyle} alt={"ad_6"}/>
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={6} sm={12}>
                <img src={ad_7} style={imgStyle} alt={"ad_7"} />
              </Grid>
              <Grid item xs={6} sm={12}>
                <img src={ad_8} style={imgStyle} alt={"ad_8"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs>
                <Category image={iconShippingFree} text={"โค้ดส่งฟรี*"} />
              </Grid>
              <Grid item xs>
                <Category image={iconDiscountBrand} text={"แบรนด์ถูกชัวร์"} />
              </Grid>
              <Grid item xs>
                <Category image={iconElectronics} text={"สินค้าอิเล็กทรอนิกส์"} />
              </Grid>
              <Grid item xs>
                <Category image={iconGamerZone} text={"Gamer Zone"} />
              </Grid>
              <Grid item xs>
                <Category image={iconFashionZone} text={"Fashion Zone Free Shipping"} />
              </Grid>
              <Grid item xs>
                <Category image={iconShopeeMart} text={"Shopee Mart 100 Coins*"} />
              </Grid>
              <Grid item xs>
                <Category image={iconShopeeCoin} text={"แลกรางวัล Shopee Coin"} />
              </Grid>
              <Grid item xs>
                <Category image={iconAllVoucher} text={"โค้ดส่วนลดพิเศษ"} />
              </Grid>
              <Grid item xs>
                <Category image={iconPartnerShip} text={"Partner Provileges"} />
              </Grid>
              <Grid item xs>
                <Category image={iconCampaings} text={"โปรโมชั่นพิเศษ"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
