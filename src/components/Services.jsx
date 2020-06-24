import React, { Component } from 'react';
import Titles from './Titles';
import {FaHiking,FaCocktail,FaShuttleVan,FaBeer} from 'react-icons/fa';
export default class Services extends Component {
    constructor(props){
        super(props);
        this.state={
            services:[ {icon:<FaCocktail />,
                title:"Free Cocktails",info:"here at our resort we make our customers happy in every way possible with unlimited cocktails and mocktails"},
                {icon:<FaHiking />,
                title:"Endless Hiking",info:"we provide endless hiking with our best facilities"},
                {icon:<FaShuttleVan />,
                title:"Free Shuttle",info:"When you come to our resort that also gives you all previlige of our shuttle service and react any where at any point of time"},
                {icon:<FaBeer />,
                title:"Strongest Beer",info:"Unlimited beer with 24/7"}]
        };
    }
    render() {
        return (
               <section className="services">
                    <Titles title="services"/>
                    <div className="services-center">
                        {this.state.services.map((item,index)=>{
                            return(
                                <article  key={index} className="service">
                                   <span>{item.icon}</span>
                                   <h6>{item.title}</h6>
                                   <p>{item.info}</p>
                                </article>
                            )
                        })}
                    </div>
               </section>
        );
    }
}
