import React from 'react';
import '../styles/styles.scss';

import SimplLogo from '../assets/logo.svg';
import SimplLogoBW from '../assets/logo-bw.svg';
import TransactionTick from '../assets/transaction-icon-tick.svg';
import TransactionBill from '../assets/transaction-icon-bill.svg';
import UserIcon from '../assets/user-icon.svg';

// Merchant Logos
import BookMyShowLogo from '../assets/bookmyshow-logo.png';
import FreshmenuLogo from '../assets/Freshmenu.png';
import FaasosLogo from '../assets/Faasos.png';
import ZomatoLogo from '../assets/Zomato.png';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="main-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <img alt="Simpl Logo" src={SimplLogo} />
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarContent">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link links" href="/">Download App</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link links" href="/">Log Out</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="row">
                            <div className="col greeter-col">
                                Welcome back, John Doe
                    </div>
                        </div>
                        <div className="row">
                            <div className="col status-col">
                                You last transacted on Faasos. Your next bill will be generated on 12th Jun 2017.
                    </div>
                        </div>
                        <div className="row links-row">
                            <div className="col-4 col-sm-2 links active">Overview</div>
                            <div className="text-center col-4 col-sm-2 links">Profile</div>
                            <div className="text-center col-4 col-sm-2 links">Transactions</div>
                            <div className="text-center col-4 col-sm-2 links">Merchants</div>
                            <div className="text-center col-4 col-sm-2 links">Help</div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="dash-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="col links">
                                            Expenditure
                                            <div className="card expenditure-card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="row">
                                                                <div className="col-12">Total Spent</div>
                                                                <div className="col-12 amount"><span className="rupee">₹</span>750</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="row">
                                                                <div className="col-12 text-right">Spending Limit</div>
                                                                <div className="col-12 amount text-right"><span className="rupee">₹</span>5000</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow="750" aria-valuemin="0" aria-valuemax="5000">
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <button className="btn btn-large payment-btn">Pay Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="col links">
                                            Transactions
                                            <div className="card transactions-card">
                                                <div className="card-body">
                                                    <div className="row transactions-row">
                                                        <div className="col-8">
                                                            <div className="row">
                                                                <div className="transaction-name col-12">Faasos</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-date col-12">May 27, 04:25 PM</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="row">
                                                                <div className="transaction-amount col-12">₹ 180</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-details col-12">More</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row transactions-row">
                                                        <div className="col-8">
                                                            <div className="row">
                                                                <div className="transaction-name col-12">BookMyShow</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-date col-12">May 22, 09:30 PM</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="row">
                                                                <div className="transaction-amount col-12">₹ 320</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-details col-12">More</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row transactions-row">
                                                        <div className="col-8">
                                                            <div className="row">
                                                                <div className="transaction-name col-12">DocsApp</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-date col-12">May 19, 09:30 PM</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="row">
                                                                <div className="transaction-amount col-12">₹ 180</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-details col-12">More</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row transactions-row payment">
                                                        <div className="col-2">
                                                            <img src={TransactionTick} alt="Successful Transaction" />
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="row">
                                                                <div className="transaction-name col-12">You paid Simpl</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-date col-12">May 19, 09:30 PM</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="row">
                                                                <div className="transaction-amount col-12"><span className="credit">CR </span>₹ 180</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-details col-12">Thank you</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row transactions-row">
                                                        <div className="col-8">
                                                            <div className="row">
                                                                <div className="transaction-name col-12">HolaChef</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-date col-12">May 17, 02:21 PM</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="row">
                                                                <div className="transaction-amount col-12">₹ 380</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-details col-12">More</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row transactions-row bill-row">
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-2 pr-0">
                                                                    <img src={TransactionBill} alt="Simpl Bill Icon" />
                                                                </div>
                                                                <div className="col-8">
                                                                    <div className="row">
                                                                        <div className="transaction-name col-12">Bill Generated | ₹ 560</div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="transaction-date col-12">For transactions made between 1st to 15th June.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="row mt-2">
                                                                <div className="col-10 offset-2">
                                                                    <div className="row">
                                                                        <div className="transaction-amount col-sm-3 col-5">
                                                                            <button className="btn btn-sm payment-btn">Pay Now</button>
                                                                        </div>
                                                                        <div className="transaction-amount col-sm-9 col-7 pl-0">Due by 27 June 2018.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row transactions-row">
                                                        <div className="col-8">
                                                            <div className="row">
                                                                <div className="transaction-name col-12">Freshmenu</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-date col-12">Apr 15, 09:21 PM</div>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="row">
                                                                <div className="transaction-amount col-12">₹ 180</div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="transaction-details col-12">More</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row transactions-row all-questions">
                                                        <div className="col-12">
                                                            &#8250; See all transactions
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="col links">
                                            Profile
                                            <div className="card profile-card">
                                                <div className="card-body p-0">
                                                    <div className="profile-row row m-0">
                                                        <div className="col-12">
                                                            <img src={UserIcon} alt="User Icon" />
                                                        </div>
                                                        <div className="profile-name col-12">
                                                            John Doe
                                                        </div>
                                                        <div className="profile-score col-12">
                                                            Simpl Credit Score
                                                        </div>
                                                    </div>
                                                    <div className="device-row row m-0">
                                                        <div className="device-name col-12">
                                                            <i className="material-icons">smartphone</i>
                                                            <span>OnePlus 3T + 2 more</span>
                                                        </div>
                                                        <div className="device-number col-12">
                                                            9870763023
                                                        </div>
                                                    </div>
                                                    <div className="row profile-row m-0">
                                                        <div className="col-6">
                                                            &#8250; Your Profile
                                                        </div>
                                                        <div className="col-6 text-right">
                                                            Incomplete
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="col links">
                                            FAQ
                                            <div className="card">
                                                <div className="card-body p-0">
                                                    <div className="accordion faq-accordion" id="accordion">
                                                        <div className="card">
                                                            <div className="card-header" id="headingOne">
                                                                <h2 className="mb-0">
                                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        &#8250; How does Simpl work?
                                                                    </button>
                                                                </h2>
                                                            </div>
                                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                                <div className="card-body">
                                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header" id="headingOne">
                                                                <h2 className="mb-0">
                                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                                                        &#8250; How is my spending limit determined?
                                                                    </button>
                                                                </h2>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                                <div className="card-body">
                                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header" id="headingOne">
                                                                <h2 className="mb-0">
                                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                                                        &#8250; How does Simpl's billing cycle work?
                                                                    </button>
                                                                </h2>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                                <div className="card-body">
                                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-header" id="headingOne">
                                                                <h2 className="mb-0">
                                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                                                        &#8250; See all questions
                                                                    </button>
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="col links">
                                            Merchants We Support
                                            <div className="card">
                                                <div className="card-body p-0">
                                                    <div className="merchants-scroll">
                                                        <div className="merchant-card">
                                                            <div className="image-container">
                                                                <img src={BookMyShowLogo} alt="Bookmyshow Logo" />
                                                            </div>
                                                            <div className="merchant-platforms">Android</div>
                                                        </div>
                                                        <div className="merchant-card">
                                                            <div className="image-container">
                                                                <img src={FreshmenuLogo} alt="Freshmenu Logo" />
                                                            </div>
                                                            <div className="merchant-platforms">Android IOS Web</div>
                                                        </div>
                                                        <div className="merchant-card">
                                                            <div className="image-container">
                                                                <img src={FaasosLogo} alt="Faasos Logo" />
                                                            </div>
                                                            <div className="merchant-platforms">Android IOS Web</div>
                                                        </div>
                                                        <div className="merchant-card">
                                                            <div className="image-container">
                                                                <img src={ZomatoLogo} alt="Zomato Logo" />
                                                            </div>
                                                            <div className="merchant-platforms">IOS</div>
                                                        </div>
                                                        <div className="merchant-card">
                                                            <div className="image-container">
                                                                <img src={BookMyShowLogo} alt="Bookmyshow Logo" />
                                                            </div>
                                                            <div className="merchant-platforms">Android</div>
                                                        </div>
                                                        <div className="merchant-card">
                                                            <div className="image-container">
                                                                <img src={BookMyShowLogo} alt="Bookmyshow Logo" />
                                                            </div>
                                                            <div className="merchant-platforms">Android</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 d-none d-sm-block">
                                <img alt="Simpl Logo BW" src={SimplLogoBW} />
                                <div className="mission-statement">
                                    Our mission is to make money simple, so that people can live well and do amazing things.
                                </div>
                                © Copyright 2018
                            </div>
                            <div className="col-md-2">
                                <div className="links" data-toggle="collapse" data-target="#simpl">
                                    Simpl
                                    <span className="d-sm-none"> &#8964; </span>
                                </div>
                                <div className="collapse dont-collapse-sm" id="simpl">
                                    <div className="secondary-links">About us</div>
                                    <div className="secondary-links">Testimonials</div>
                                    <div className="secondary-links">Careers</div>
                                    <div className="secondary-links">Help</div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="links" data-toggle="collapse" data-target="#socialmedia">
                                    Social Media                
                                    <span className="d-sm-none"> &#8964; </span>
                                </div>
                                <div className="collapse dont-collapse-sm" id="socialmedia">
                                    <div className="secondary-links">Facebook</div>
                                    <div className="secondary-links">Twitter</div>
                                    <div className="secondary-links">LinkedIn</div>
                                    <div className="secondary-links">Medium</div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="links" data-toggle="collapse" data-target="#legal">
                                    Legal
                                    <span className="d-sm-none"> &#8964; </span>
                                </div>
                                <div className="collapse dont-collapse-sm" id="legal">
                                    <div className="secondary-links">Terms</div>
                                    <div className="secondary-links">Privacy Policy</div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="links" data-toggle="collapse" data-target="#getapp">
                                    Get App                                    
                                    <span className="d-sm-none"> &#8964; </span>
                                </div>
                                <div className="collapse dont-collapse-sm" id="getapp">
                                    <div className="secondary-links">Android App</div>
                                    <div className="secondary-links">iOS App</div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-none d-sm-block">
                            <div className="col address-col">
                                Get Simpl Technologies Private Ltd. <br />
                                Address: No. 811, Crescent Business Park, Sakinaka Telephone Exchange Lane, Andheri East, Mumbai - 400072 <br />
                                Email: help [at] getsimpl.com, CIN no: U74999MH2015PTC261546
                            </div>
                        </div>
                        <div className="row d-none d-sm-block">
                            <div className="col address-col pt-0">
                                *Google Play and the Google Play logo are trademarks of Google Inc. <br />
                                *Apple® and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store® is a service mark of Apple Inc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;