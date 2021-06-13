import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button } from '@material-ui/core';
import './UserPayment.css';
import Transaction from '../Transaction/Transcation';
import PopupTranscation from '../Transaction/PopupTranscation'
export default function UserHome() {

    const [openTrans, setOpenTrans] = useState(false);
    return (
        <div>
            <Header />
            <div className="users">
                <Link to='/main'><h3> HOME</h3></Link>
            </div>
            <div classname="contents">
                <div className="content__insides">
                    <div className="amount__cards">
                        <div className="amounts">
                            <span>Rs 10000.00</span>
                        </div>
                        <div className="transactions">
                            <span onClick={() => setOpenTrans(true)} >View all your Transactions</span>
                        </div>
                    </div>
                    <div className="payment__cards">
                        <div className="inputs">
                            <form>
                                <input type="text" size="12" placeholder="Enter the Amount" />
                                <div className="amount__clicks">
                                    <span>+100</span>
                                    <span>+500</span>
                                    <span>+1000</span>
                                </div>
                                <Button className="pays">Pay</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <PopupTranscation
                openTrans={openTrans}
                setOpenTrans={setOpenTrans}
            >
                <Transaction />
            </PopupTranscation>
        </div>
    )
}

