import React from 'react';

function Footer() {

    return (
        <div className='footer' >
            <div class='resp_footerA'>
                <div class='Social'>
                    <p>Follow us on</p>
                    <br/>
                    <div class='Iconss'>
                        <a href='#'><i class="fa-brands fa-facebook-square"></i></a>
                        <a href='#'><i class="fa-brands fa-twitter-square"></i></a>
                        <a href='#'><i class="fa-brands fa-instagram-square"></i></a>
                        <a href='#'><i class="fa-brands fa-youtube"></i></a>
                    </div>
                    <br/>
                    <span> Get app exclusive deals</span>
                    <div class='App_details'>
                        <span class="material-symbols-outlined">phone_android</span>
                        <p>Download our App</p>
                    </div>
                </div>
                <div class='GrabOne'>
                    <p>GrabOne</p>
                    <br/>
                    <div class='Info'>
                        <a href='#'>Contact Us</a>
                        <a href='#'>About Us</a>
                        <a href='#'>Terms & Returns</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Gift Cards</a>
                    </div>
                </div>
                <div class='MyAccount'>
                    <p>My Account</p>
                    <br/>
                    <div class='Info'>
                        <a href='#'>My Account</a>
                        <a href='#'>My Cart</a>
                        <a href='#'>My Coupons</a>
                        <a href='#'>FAQ</a>
                    </div>
                </div>
                <div class='Merchants'>
                    <p>Merchants</p>
                    <br/>
                    <div class='Info'>
                        <a href='#'>Run a Deal </a>
                        <a href='#'>Merchant Centre</a>
                    </div>
                </div>
            </div>
            <div class='resp_footerB'>
                <div class='NewsletterSignup'>
                    <div class='Signup-continer'>
                        <p class='Signup-title'>Newsletter Signup</p>
                        <p class='Signup-info'>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
                        <br/>
                    </div>
                    <div class='email-subscribe'>
                        <span class="material-symbols-outlined dd">email</span>
                        <input type="text" placeholder="Enter email Address"/>
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
        </div> 
    ); 
  } 
  export default Footer ;
  