import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

class Index extends Component {
    render() {
        return (
            <div>
                <Header></Header>

                <Footer></Footer>
            </div>
        );
    }
}

export default Index;

if (document.getElementById("app")) {
    ReactDOM.render(
        <Router>
            <Index />
        </Router>,
        document.getElementById("app")
    );
}
