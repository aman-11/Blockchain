import React, { useEffect, useState } from 'react'
import Post from './post/Post.js';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Main.css';
import { Route, Redirect, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchStory } from '../../Actions/fetchStory'
function Main({ userBal }) {

    const user = localStorage.getItem('profile');
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(fetchStory())
    }, [dispatch])

    const stories = useSelector((state) => state.Story)
    //jwt token
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
                <div className="greeting">
                    <h3>Glad to know you are donating!</h3>
                </div>
                <div className="main__content">
                    <div className="amount__card">
                        <div className="amount">
                            <span>Rs {userBal}</span>
                        </div>
                        <div className="transaction">
                            <Link to='/show'><span style={{ color: 'yellow', fontWeight: '800' }}> { /*onClick={() => setOpenTrans(true)}}*/}
                                View all your Transactions</span>
                            </Link>
                        </div>
                    </div>

                    <div className="main__story">
                        <div className="">
                            <Post className="card" stories={stories} />
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        );

    }

    return <Route render={renderFn} />;
}

export default Main
