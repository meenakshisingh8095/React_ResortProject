import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default class Home extends Component {
    render() {
        return (
              <>
                <Hero>
                   <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at Rs.999">
                       <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                   </Banner>
               </Hero>
               <Services />
               <FeaturedRooms />
              </>
        )
    }
}
