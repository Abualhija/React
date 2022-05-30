import React, {Component} from 'react';
import Header from './Header.js';
import List from './List.js';
import Adv from './Adv.js'
import Discover from './Discover.js';
import Deals from './Deals.js';
import Footer from './Footer.js';
import Rights from './Rights.js';
import RespHeader from './RespHeader.js';
import Account_menu from './Account_menu.js';
import CountriesLoc from './LocationCountires.js';
class All extends Component {
    render() {
      return (
        <div class='container_all'>
        < Header / >
        < List / >
        < Adv / >
        < Discover / >
        < Deals / >
        < Footer / >
        < Rights / >
        < RespHeader / >
        < Account_menu / >
        < CountriesLoc / >


        </div>
    );
      }
    }
  
export default All;
  