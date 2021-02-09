import React, { Component } from "react";

class SuccessAlert extends Component {
    render() {
        return (
            <div class="alert alert-success" role="alert">
                Record create/update/delete successful!
            </div>
        );
    }
}
export default SuccessAlert;
