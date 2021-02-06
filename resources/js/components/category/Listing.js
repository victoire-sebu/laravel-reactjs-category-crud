import React, { Component } from "react";
import axios from "axios";

class Listing extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
        };
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/category").then((response) => {
            this.setState({ categories: response.data });
        });
    }

    onDelete(category_id) {
        axios
            .delete("http://127.0.0.1:8000/category/delete/" + category_id)
            .then((response) => {
                var categories = this.state.categories;
                for (var i = 0; i < categories.length; i++) {
                    if (categories[i].id == category_id) {
                        categories.splice(i, 1);
                        this.setState({ categories: categories });
                    }
                }
            });
    }

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
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.categories.map((category) => {
                            return (
                                <tr>
                                    <th scope="row">{category.id}</th>
                                    <td>{category.name}</td>
                                    <td>
                                        {category.active == 1
                                            ? "Active"
                                            : "InActive"}
                                    </td>
                                    <td>{category.created_at}</td>
                                    <td>{category.updated_at}</td>
                                    <td>
                                        <a
                                            href="#"
                                            onClick={this.onDelete.bind(
                                                this,
                                                category.id
                                            )}
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Listing;
