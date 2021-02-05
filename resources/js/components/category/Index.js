import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Add from "./Add";
import Listing from "./Listing";

class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="container">
                        <div className="row justify-content-center">
                            <Link to="/category" className="btn btn-primary">
                                Listing
                            </Link>{" "}
                            &nbsp;
                            <Link
                                to="/category/add"
                                className="btn btn-secondary"
                            >
                                Add
                            </Link>
                        </div>

                        <Route exact path="/category" component={Listing} />
                        <Route exact path="/category/add" component={Add} />
                    </div>
                </Router>
            </div>
        );
    }
}
export default Index;
