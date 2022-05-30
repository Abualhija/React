import React from 'react';
import $ from 'jquery';
import CountrieItem from './CountriesTemp.js';
$(document).ready(function(){
    $('.location').click(function(){
        $('.Countries').toggleClass('showCountries');
    });
    $('.Countries').mouseleave(function(){
        $('.Countries').removeClass('showCountries');
    });
    $('.Countries p').click(function(){
        $('.Countries').removeClass('showCountries');
    });

    $('.location').click(function(){
        $('.Account_menu.showAccount').removeClass('showAccount')
    });

    

});
const CountriesData=[
    {   CountryName:'Auckland'},
    {   CountryName:'Waikato'},
    {   CountryName:'Wellington'},
    {   CountryName:'Northland'},
    {   CountryName:'Manawatu - Wanganui'},
    {   CountryName:'Taurang'},
    {   CountryName:'Rotorua - Taupo'},
    {   CountryName:'Hawkes Bay'},
    {   CountryName:'Christchurch'},
    {   CountryName:'Taranaki'},
    {   CountryName:'Nelson - Marlborough'},
    {   CountryName:'Queenstown - Wanaka'},
    {   CountryName:'Dunedin - Invercargill'},

]
const CountryItems=CountriesData.map(function(countItem){
    return <CountrieItem 
                CountryName={countItem.CountryName}
                />
})

function CountriesLoc() {

    return (
      <div class='Countries'>
          <ul>
              {CountryItems}

          </ul>
      </div>
      );
  }
  export default CountriesLoc ;
  