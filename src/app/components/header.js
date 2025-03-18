import React from 'react';
import '../styles/header.css';
const Header = () => {
    return (
        <header id="header">
            <section className="wel-t-band">
                <div className="container">
                    <div className="row wel-band-bg">
                        <div className="col-md-6 pull-left col col-sm-12">
                            <p>Welcome to Leader in Industrial Solution <span>since 2005</span></p>
                        </div>
                        <div className="col-md-6 pull-right text-right col-sm-12">
                            <p>Global Certificate: <span>ISO 9001:2016</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;