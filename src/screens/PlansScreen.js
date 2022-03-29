import React from 'react';
import "./PlansScreen.css";

function PlansScreen() {

    return (
        <>
            <div className='plansScreen'>
                <div className="plansScreen__plan">
                    <div className="plansScreen__info">
                        <h5>Netflix Standard</h5>
                        <h6>1080p</h6>
                    </div>
                    <button>Subscribe</button>
                </div>
                <div className="plansScreen__plan">
                    <div className="plansScreen__info">
                        <h5>Netflix Basic</h5>
                        <h6>720p</h6>
                    </div>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="plansScreen__CurrentPlan">
                <div className="plansScreen__info">
                    <h5>Netflix Premium</h5>
                    <h6>4k+HDR</h6>
                </div>

                <button>Current Package</button>
            </div>
        </>
        
    )
}

export default PlansScreen
