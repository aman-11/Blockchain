import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation, Route, Redirect, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Button } from '@material-ui/core';
import './UserPayment.css';
import { useDispatch } from 'react-redux'

export default function UserHome({ setTransaction, userBal }) {

    const [From, setFrom] = useState('');
    const [Amount, setAmount] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory()
    //console.log(user.email)
    const { id } = useParams()
    const handleSubmit = (e) => {
        e.preventDefault()
        const sender = (user.email)
        setTransaction(Amount, id, sender, "Admin", From, "xxx")
        history.push('/main')
    }

    function renderFn() {
        if (!user) {
            return (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: '/main' },
                    }}
                />
            );
        }
        return (
            <div>
                <Header />
                <div className="users">
                    <Link to='/main'><h3> HOME</h3></Link>
                </div>
                <div className="contents">
                    <div className="content__insides">
                        <div className="amount__cards">
                            <div className="amounts">
                                <span>Rs {userBal}</span>
                            </div>
                            <div className="transactions">
                               <a href=''>
                                    <span style={{ color: 'yellow', fontWeight: '800' }}>View all your Transactions</span>
                                </a>
                            </div>
                        </div>
                        <div className="payment__cards">
                            <div className="inputs">
                                <form onSubmit={handleSubmit}>
                                    <input type="text" size="12" placeholder="Enter your UPI ID"
                                        value={From}
                                        onChange={e => setFrom(e.target.value)}
                                    />
                                    <input type="text" size="12" placeholder="Enter the Amount" style={{ marginTop: '16px' }}
                                        value={Amount}
                                        onChange={e => setAmount(e.target.value)}
                                    />
                                    <div className="amount__clicks">
                                        <span>+100</span>
                                        <span>+500</span>
                                        <span>+1000</span>
                                    </div>
                                    <Button className="pays" type="submit">Pay</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    return <Route render={renderFn} />;
}

