import React from 'react';
import Dis from './Top promotion temp.js';
import CatItem from './CatigoriesTemp.js';
const info=[
    {        imgLink:'https://main-cdn.grabone.co.nz/goimage/495x343/66881e3937f955ca34d7304de9c7301d3ac7bb03.jpg' ,        overlayText:'Five-Star Auckland Stay for Two in a Deluxe Room at Cordis Auckland incl. Cooked Breakfast, $50 Credit, 2 Drinks, Pool, Spa & Fitness Centre, Parking & Late Checkout - Options to Stay in the...',        Title:'Luxury 5-Star Auckland Stay at Cordis',       Name:'Cordis',                  Country:"Auckland",     BoughtNum:'254',    OldPrice:'580', NewPrice:'279',   },
    {        imgLink:'https://main-cdn.grabone.co.nz/goimage/495x343/db47efc113728b3eebf669248c7b850a3eff9b10.jpg',        overlayText:'Honda BasicCare 35-Point Service incl. Oil & Filter Change for Honda Vehicles 2016 & Older - Four Auckland Locations Available',                                                                            Title:'BasicCare 35-Point Service',                  Name:'Honda Stores Auckland',   Country:'Mount Eden',   BoughtNum:'2',      OldPrice:'270', NewPrice:'195',   },    
]

const Items=info.map(function(item){
    return <Dis 
                imgLink={item.imgLink}
                overlayText={item.overlayText}
                Title={item.Title}
                Name={item.Name}
                Country={item.Country}
                BoughtNum={item.BoughtNum}
                OldPrice={item.OldPrice}
                NewPrice={item.NewPrice}
                />
})

const sectionData=[
    {   catigorie:'Featured Auckland deals',        num:'289'},
    {   catigorie:'Collections',                    num:'44'},
    {   catigorie:'Escaps',                         num:'75'},
    {   catigorie:'Picked for You',                 num:'256'},
    {   catigorie:'Activities, Events & Outdoors',  num:'256'},
    {   catigorie:'Store',                          num:'4946'},
    {   catigorie:'Restaurants, Bars, Cafes',       num:'20'},
    {   catigorie:'Beauty, Massage & Spa',          num:'380'},
    {   catigorie:'House & Garden',                 num:'2442'},
    {   catigorie:'Fitness & Sports',               num:'275'},
    {   catigorie:'Automotive',                     num:'164'},

]
const CatigorieItems=sectionData.map(function(catItem){
    return <CatItem 
                catigorieName={catItem.catigorie}
                catigorieNum={catItem.num}
                />
})

function Discover() {

    return (
      <div class='Discover' >
          <div class='section1'>
                <div class='discover-container'>
                    <p>Discover</p>
                    <ul>
                        {CatigorieItems}
                    </ul>
                </div>
                <div class='section3'>
                    {Items}
                </div>
            </div>       
            <div class='section2'>
                <div class='email_container'>
                    <div class='Adv_Email' >                  
                        <div class='adv_text'>
                            <div>Get the best deals delivered direct to your inbox each day</div>
                        </div>
                        <div class="adv_email" >
                            <span class="material-symbols-outlined dd">email</span>            
                            <input type="text" placeholder="Enter email Address"/>
                            <button type="submit">Subscribe</button>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
  
    ); 
  }  
  export default Discover ;
  