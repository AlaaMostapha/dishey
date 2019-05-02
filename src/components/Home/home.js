import React, { Component } from 'react';
import Banner from '../banner slider/banner';
import About from '../about/about'
import SpecialOffers from '../special offers/special_offers';
import SpecialMeals from '../special meals/specialmeals';
import Dealoftheday from '../deal of the day/dealoftheday';
import AmazingOffers from '../amazing offers/amazingoffers';
import ThisMonthOffers from '../thismonthoffers/thismonthoffers';
import ContactUs from '../location and contact us/contact us';


class Home extends Component {
  render() {
    return (
      <div>
      
        <Banner />
        <About />
        <SpecialOffers />
        <SpecialMeals />
        <Dealoftheday />
        <AmazingOffers />
        <ThisMonthOffers />
        <ContactUs />
       
      </div>
    );
  }
}

export default Home;
