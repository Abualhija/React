import React from 'react';
import Dis from './Top promotion temp';
import CollTemp from './CollectionsTemp';


const info=[
    {        imgLink:'https://main-cdn.grabone.co.nz/goimage/325x225/ff50551fb8472dc60ec0d23111b44d28da0e4031.jpg' ,        overlayText:'Up to 44% Off Mt Cheeseman Ski Area Lift Pass - Options for Adult, Student Pass or Youth - Valid from 23rd July 2022',          Title:'Mt Cheeseman Ski Area Lift Pass',               Name:'Mt Cheeseman Ski Area',     Country:"Christchurch",   BoughtNum:'68',     OldPrice:'45',  NewPrice:'25'    },
    {        imgLink:'https://main-cdn.grabone.co.nz/goimage/325x225/ed7886d2fbb6da6523029509d53817f9ff47d0b8.jpg' ,        overlayText:'Thermal Hot Pool Entry for One Adult (14 Years & Over) at Wairakei Terraces' ,                                                  Title:'Thermal Hot Pool Entry (14 Years & Over Only)', Name:'Wairakei Terraces' ,        Country:'Wairakei' ,      BoughtNum:'13262' , OldPrice:'25',  NewPrice:'15',   },
    {        imgLink:'https://main-cdn.grabone.co.nz/goimage/325x225/295ba48185072660b06514807d0be2362a56e7e6.jpg' ,        overlayText:'Ramesses Shaggy Fleece Quilt Cover Set - Four Colours & Four Sizes Available' ,                                                 Title:'Ramesses Shaggy Fleece Quilt Cover Set' ,       Name:'kingtex international' ,    Country:'' ,              BoughtNum:'52' ,    OldPrice:'140', NewPrice:'55',   },
    {        imgLink:'https://main-cdn.grabone.co.nz/goimage/325x225/1b377a01e3ed108cbc421de894f12bb8a373047b.jpg' ,        overlayText:'$40 Breakfast or Lunch Voucher for Two People - Option for $60 Dinner Voucher' ,                                                Title:'Remuera Dining Experience for Two' ,            Name:'Remuera Local & Laneway' ,  Country:'Remuera' ,       BoughtNum:'50' ,    OldPrice:'40',  NewPrice:'20',   },
    {        imgLink:'https://main-cdn.grabone.co.nz/goimage/325x225/3b2f92c5334911a5704931eb8a0a6d9362448219.jpg' ,        overlayText:'Weighted Blanket - Four Weights Available' ,                                                                                    Title:'Weighted Blanket' ,                             Name:'' ,                         Country:'' ,              BoughtNum:'63' ,    OldPrice:'100', NewPrice:'50',   },
    {        imgLink:'https://main-cdn.grabone.co.nz/goimage/325x225/94051fc2b57dff6bb3707053f25c6d1dc94c8176.jpg' ,        overlayText:'Yoga Mat Storage Bag - Option for Two-Pack' ,                                                                                   Title:'Yoga Mat Storage Bag' ,                         Name:'' ,                         Country:'' ,              BoughtNum:'9' ,     OldPrice:'15',  NewPrice:'19.50',},
    {        imgLink:'https://main-cdn.grabone.co.nz/goimage/325x225/2bb8ea484a81edbcaa054f9000d261b9610a9f6f.jpg' ,        overlayText:'Car Foam Wash Gun' ,                                                                                                            Title:'Urban Global Ltd' ,                             Name:'' ,                         Country:'' ,              BoughtNum:'10' ,    OldPrice:'79',  NewPrice:'35',   },
]

const ItemsDeals=info.map(function(item){
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


const Collection_items=[
    {        imgLink:'https://mediacdn.grabone.co.nz/asset/cWllOdaxqn' ,    overlayText:'Ugg collection',          Title:'Ugg collection',         Name:'Multiple deals',         },
    {        imgLink:'https://mediacdn.grabone.co.nz/asset/DKqrqrT4pw' ,    overlayText:'Vivo Hair & Beauty',      Title:'Vivo Hair & Beauty',     Name:'Multiple deals',         },
    {        imgLink:'https://mediacdn.grabone.co.nz/asset/YaFw5GkDiY' ,    overlayText:'South Island Getaways',   Title:'South Island Getaways',  Name:'Multiple deals',         },
    {        imgLink:'https://mediacdn.grabone.co.nz/asset/ZF4G1zPBzJ' ,    overlayText:'Bedroom Essentials',      Title:'Bedroom Essentials',      Name:'Multiple deals',         },
]


const Collection=Collection_items.map(function(Coll){
    return <CollTemp 
                imgLink={Coll.imgLink}
                overlayText={Coll.overlayText}
                Title={Coll.Title}
                Name={Coll.Name}
                />

})


function Deals() {

    return (
        <div class="Deals">
        {/* //////////////////////////////////////////////////////////////////                     */}
            <div class='Deals_title first_Deal'>
                <p>Featured Auckland deals</p>
                <button class='View_More_Button'>View More <span class="material-symbols-outlined">chevron_right</span></button>   
            </div>
            <div class='Deals_body'>
                <div class='First_Row'>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                            {ItemsDeals[0]}
                        </div>
                        <div class='deal_item'>
                            {ItemsDeals[0]}
                        </div>
                    </div>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                            {ItemsDeals[0]}
                        </div>
                        <div class='deal_item'>
                            {ItemsDeals[0]}
                        </div>
                    </div>
                </div>
                <div class='Second_Row'>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                          {ItemsDeals[0]}
                        </div>
                        <div class='deal_item'>
                         {ItemsDeals[0]}
                        </div>
                    </div>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                            {ItemsDeals[0]}
                        </div>
                        <div class='deal_item'>
                          {ItemsDeals[0]}
                        </div>
                    </div>
                </div>
            </div>

{/* //////////////////////////////////////////////////////////////////////                     */}
            <div class='Deals_title'>
                <p>Collections</p>
                <button class='View_More_Button'>View More <span class="material-symbols-outlined">chevron_right</span></button>   
            </div>
            <div class='Deals_body'>
                <div class='First_Row'>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                            {Collection[0]}
                        </div>
                        <div class='deal_item'>
                            {Collection[1]}
                        </div>
                    </div>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                            {Collection[2]}
                        </div>
                        <div class='deal_item'>
                            {Collection[3]}
                        </div>
                    </div>
                </div>
            </div>
{/* ////////////////////////////////////////////////////////////////////////////////                 */}
            <div class='Deals_title'>
                <p>Activities, Events & Outdoors </p>
                <button class='View_More_Button'>View More <span class="material-symbols-outlined">chevron_right</span></button>   
            </div>
            <div class='Deals_body'>
                <div class='First_Row'>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                            {ItemsDeals[1]}
                        </div>
                        <div class='deal_item'>
                           {ItemsDeals[1]}
                        </div>
                    </div>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                            {ItemsDeals[1]}
                        </div>
                        <div class='deal_item'>
                            {ItemsDeals[1]}
                        </div>
                    </div>
                </div>
            </div>
{/* /////////////////////////////////////////////////////////////////////////////////        */}
            <div class='Deals_title'>
                <p>Store</p>
                <button class='View_More_Button'>View More <span class="material-symbols-outlined">chevron_right</span></button>   
            </div>
            <div class='Deals_body'>
                <div class='First_Row'>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                            {ItemsDeals[2]}
                        </div>
                        <div class='deal_item'>
                            {ItemsDeals[2]}
                        </div>
                    </div>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                            {ItemsDeals[2]}
                        </div>
                        <div class='deal_item'>
                            {ItemsDeals[2]}
                        </div>
                    </div>
                </div>
            </div>
{/* ///////////////////////////////////////////////////////////////////////////////////     */}
                
            <div class='Deals_title'>
                <p>Restaurants, Bars, Cafes</p>
                <button class='View_More_Button'>View More <span class="material-symbols-outlined">chevron_right</span></button>   
            </div>
            <div class='Deals_body'>
                <div class='First_Row'>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                          {ItemsDeals[3]}
                        </div>
                        <div class='deal_item'>
                          {ItemsDeals[3]}
                        </div>
                    </div>
                        <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                           {ItemsDeals[3]}
                        </div>
                        <div class='deal_item'>
                           {ItemsDeals[3]}
                        </div>
                    </div>
                </div>
            </div>
{/* ////////////////////////////////////////////////////////////////////////////      */}
            <div class='Deals_title'>
                <p>House & Garden </p>
                <button class='View_More_Button'>View More <span class="material-symbols-outlined">chevron_right</span></button>   
            </div>
            <div class='Deals_body'>
                <div class='First_Row'>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                            {ItemsDeals[4]}                  
                        </div>
                        <div class='deal_item'>
                            {ItemsDeals[4]}
                        </div>
                    </div>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                          {ItemsDeals[4]}
                        </div>
                        <div class='deal_item'>
                          {ItemsDeals[4]}                    
                        </div>
                    </div>
                </div>
            </div>
{/* /////////////////////////////////////////////////////////////////////////           */}
            <div class='Deals_title'>
                <p>Fitness & Sports</p>
                <button class='View_More_Button'>View More <span class="material-symbols-outlined">chevron_right</span></button>   
            </div>
            <div class='Deals_body'>
                <div class='First_Row'>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                          {ItemsDeals[5]}                   
                        </div>
                        <div class='deal_item'>
                           {ItemsDeals[5]}                     
                        </div>
                    </div>
                    <div class='Deals_1088_resp'>
                        <div class='deal_item'>
                          {ItemsDeals[5]}                         
                        </div>
                        <div class='deal_item'>
                           {ItemsDeals[5]}
                        </div>
                    </div>
                </div>
            </div>
{/* ////////////////////////////////////////////////////////////////////////////////          */}
            <div class='Deals_title'>
                    <p>Featured Auckland deals</p>
                    <button class='View_More_Button'>View More <span class="material-symbols-outlined">chevron_right</span></button>   
                </div>
                <div class='Deals_body'>
                    <div class='First_Row'>
                        <div class='Deals_1088_resp'>
                            <div class='deal_item'>
                             {ItemsDeals[6]}                        
                            </div>
                            <div class='deal_item'>
                                {ItemsDeals[6]}                            
                            </div>
                        </div>
                            <div class='Deals_1088_resp'>
                            <div class='deal_item'>
                                {ItemsDeals[6]}                              
                            </div>
                            <div class='deal_item'>
                                {ItemsDeals[6]}                                
                            </div>
                        </div>
                    </div>
        </div>
{/* ///////////////////////////////////////////////////////////////////////////////                 */}
    </div> 
    ); 
  } 
  export default Deals ;
  
