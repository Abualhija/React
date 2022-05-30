import React from 'react';
import $ from 'jquery';

$(document).ready(function(){
    $('.account').click(function(){
        $('.Account_menu').toggleClass('showAccount');
    });
    $('.Account_menu').mouseleave(function(){
        $('.Account_menu').removeClass('showAccount');
    });
    $('.Account_menu p').click(function(){
        $('.Account_menu').removeClass('showAccount');
    });
    $('.account').click(function(){
        $('.Countries.showCountries').removeClass('showCountries')
    });


});


function Header() {

    return (
      <div className='main-header' >
            <div class='logo'>GrabOne</div>
            <div class='Icons-container'>
                <div className='location'>
                    <a href='#'><span class="material-symbols-outlined pd">pin_drop</span></a>
                    <span class='Counrty'>Jordan</span>
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
                    <a href='#'><span class="material-symbols-outlined pd resp">favorite</span></a>
                    <a href='#'><span class="material-symbols-outlined pd resp">shopping_cart</span></a>
                <div class='account resp'>
                    <a href='#'><span class="material-symbols-outlined pd resp">person</span></a>
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
                <div class='email resp'>
                    <a href='#'><span class="material-symbols-outlined pd">mail</span></a>
                    <span class='subscribe'>Subscribe</span>
                </div>
            </div>
        </div> 
    ); 
  }  
  export default Header ;