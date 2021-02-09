import React, { Component } from "react";

class ErrorAlart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="alert alert-danger" role="alert">
                {this.props.message}
            </div>
        );
    }
}
export default ErrorAlart;
