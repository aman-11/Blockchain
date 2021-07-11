import React, { Component } from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom'
import './Transcation.css'
export class Show extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="users">
                    <Link to='/main'><h3> HOME</h3></Link>
                </div>

                <div className="ctr" style={{ background: 'white' }}>
                    {this.props.transactions.map((each, index) => {
                        return (
                            <div className="each__pay" key={index}>
                                <div className="pay_title" >
                                    <span className="pay__title_left" style={{ fontSize: '18px', fontWeight: '600' }} >{each.to}</span>
                                    <span className="pay__title_right" style={{ fontSize: '18px', fontWeight: '600' }} >Rs {each.amount}</span>
                                </div>
                                <div>
                                    <span>
                                        {this.props.camps[0][(each.campId) - 1].campName}
                                    </span>
                                </div>
                                <div className="pay_id" >
                                    <span className="pay__title_left" style={{ fontSize: '14px', fontWeight: '500', color: ' rgb(150, 150, 150)' }} >{each.from}</span>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <Footer />
            </div>
        )
    }
}

export default Show
