import React from 'react';
import $ from 'jquery';

 
$(document).ready(function(){
$('.promotion_photo .addIcon').mouseenter(function(){
    $('.overlay').addClass('overlay_hide');
});
$('.promotion_photo .addIcon').mouseleave(function(){
    $('.overlay').removeClass('overlay_hide');
});

});

function Dis (props) {
    return (
        <div class='All_top_promotions p'>
            <div class='top_promotion_1'>
                <div class='promotion_photo'>
                    <i class="fa-solid fa-heart-circle-plus addIcon"></i>
                    <img src={props.imgLink}/>
                    <div class="overlay">
                        <div class="text">{props.overlayText}
                        </div>
                    </div>
                </div>
                <div class='promotion_body'>
                    <p class='title'>{props.Title}</p>
                    <p class='name'>{props.Name}</p>
                    <p class='country'>{props.Country}</p> 
                </div>
                <div class='promotion_details'>
                    <div class='bought_number'>
                        <p>{props.BoughtNum} bought</p>
                    </div> 
                    <div class='price'>
                        <div class='old_price'>${props.OldPrice}</div> 
                        <div class='new_price'>
                            <div class='from'>from</div>
                            <div class='new_price_amount'>${props.NewPrice}</div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
    export default Dis ;
