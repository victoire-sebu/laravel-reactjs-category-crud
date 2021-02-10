import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error404 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">404 Page not found</div>
                            <Link to="/" className="alert-link">
                                Back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Error404;
