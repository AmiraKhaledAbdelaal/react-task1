import React from 'react';

function Footer() {
    return (
        <>
        <div className="footer py-5">
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center text-center">
                    <div className="col-md-4">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4">
                        <h3>AROUND THE WEB</h3>
                        <div className="icons">
                            <a href="#"><i className="fa-brands fa-facebook" /></a>
                            <a href="#"><i className="fa-brands fa-twitter" /></a>
                            <a href="#"><i className="fa-brands fa-youtube" /></a>
                            <a href="#"><i className="fa-brands fa-instagram" /></a>
                          
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>

        
            
        </>
    );
}

export default Footer;