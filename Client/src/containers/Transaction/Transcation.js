import React, { useState } from 'react'
import "./Transcation.css";

function Transcation() {
    const [openTrans, setOpenTrans] = useState(false);
    const openInPopup = () => {
        setOpenTrans(true);
    }
    return (
        <div className="ctr" style={{ background: 'white' }}>
            <div className="each__pay">
                <div className="pay_title" >
                    <span className="pay__title_left" style={{ fontSize: '18px', fontWeight: '600' }} >Donated</span>
                    <span className="pay__title_right" style={{ fontSize: '18px', fontWeight: '600' }} >Rs 1000</span>
                </div>
                <div className="pay_id" >
                    <span className="pay__title_left" style={{ fontSize: '14px', fontWeight: '500', color: ' rgb(150, 150, 150)' }} >6bcg45dgdhsjsko</span>
                </div>
            </div>

            <div className="each__pay">
                <div className="pay_title" >
                    <span className="pay__title_left" style={{ fontSize: '18px', fontWeight: '600' }} >Donated</span>
                    <span className="pay__title_right" style={{ fontSize: '18px', fontWeight: '600' }} >Rs 1000</span>
                </div>
                <div className="pay_id" >
                    <span className="pay__title_left" style={{ fontSize: '14px', fontWeight: '500', color: ' rgb(150, 150, 150)' }} >6bcg45dgdhsjsko</span>
                </div>
            </div>

            <div className="each__pay">
                <div className="pay_title" >
                    <span className="pay__title_left" style={{ fontSize: '18px', fontWeight: '600' }} >Donated</span>
                    <span className="pay__title_right" style={{ fontSize: '18px', fontWeight: '600' }} >Rs 1000</span>
                </div>
                <div className="pay_id" >
                    <span className="pay__title_left" style={{ fontSize: '14px', fontWeight: '500', color: ' rgb(150, 150, 150)' }} >6bcg45dgdhsjsko</span>
                </div>
            </div>


        </div>
    );
}

export default Transcation
