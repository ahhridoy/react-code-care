import React from "react";
import img from "../../images/contact-us.png";

const Contact = () => {
    return (
        <div className="row">
            <div className="col-md-6 mt-5">
                <div className="mt-5">
                    <h2 className="text-warning">Address</h2>
                    <h6>Banani 1213, Dhaka, Bangladesh</h6>
                </div>
                <div className="mt-5">
                    <h2 className="text-warning">Phone</h2>
                    <h6>01318183476</h6>
                </div>
                <div className="mt-5">
                    <h2 className="text-warning">Follow Us</h2>
                    <a href="https://facebook.com/juniorhridoyofficial">
                        Facebook
                    </a>{" "}
                    <br />
                    <a href="https://instagram.com/ahhridoyy">Instagram</a>{" "}
                    <br />
                    <a href="https://twitter.com/ahhridoyy">Twitter</a>
                </div>
            </div>

            <div className="col-md-6">
                <img className="w-100" src={img} alt="" />
            </div>
        </div>
    );
};

export default Contact;
