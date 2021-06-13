import React, { useState } from 'react'
import Post from './post/Post.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Transaction from '../Transaction/Transcation';
import PopupTranscation from '../Transaction/PopupTranscation';
import './Main.css';

function Main() {
    const [openTrans, setOpenTrans] = useState(false);
    return (
        <div>
            <Header />
            <div className="greeting">
                <h3>Glad to know you are donating!</h3>
            </div>
            <div className="main__content">
                <div className="amount__card">
                    <div className="amount">
                        <span>Rs 10000.00</span>
                    </div>
                    <div className="transaction">
                        <span onClick={() => setOpenTrans(true)} >View all your Transactions</span>
                    </div>
                </div>

                <div className="main__story">
                    <div className="" cards>
                        <Post className="card" />
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
    );
}

export default Main
