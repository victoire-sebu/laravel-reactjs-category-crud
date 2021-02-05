import React, { Component } from "react";

class Listing extends Component {
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Create At</th>
                            <th scope="col">Update At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Listing;
