import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import { API_BASE_URL } from "../config";
import SuccessAlert from "../SuccessAlert";
import ErrorAlart from "../ErrorAlert";

class Listing extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 3,
            alert_message:'',
        };
    }

    componentDidMount() {
        axios.get(API_BASE_URL + "/category").then((response) => {
            this.setState({
                categories: response.data.data,
                activePage: response.data.current_page,
                itemsCountPerPage: response.data.per_page,
                totalItemsCount: response.data.total,
            });
        });
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
        axios
            .get(API_BASE_URL + "/category?page=" + pageNumber)
            .then((response) => {
                this.setState({
                    categories: response.data.data,
                    activePage: response.data.current_page,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                });
            });
    }

    onDelete(category_id) {
        axios
            .delete(API_BASE_URL + "/category/delete/" + category_id)
            .then((response) => {
                var categories = this.state.categories;
                for (var i = 0; i < categories.length; i++) {
                    if (categories[i].id == category_id) {
                        categories.splice(i, 1);
                        this.setState({ categories: categories });
                    }
                }
                    this.setState({ alert_message: "success" });
            })
            .catch((error) => {
                this.setState({ alert_message: "error" });
            });
    }

    render() {
        return (
            <div className="container">
                <hr />
                {this.state.alert_message == "success" ? (
                    <SuccessAlert />
                ) : null}
                {this.state.alert_message == "error" ? <ErrorAlart /> : null}
                <table className="table">
                    <thead>
                        <tr >
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
                                <tr key={category.id}>
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
                                        <Link
                                            to={`/category/edit/${category.id}`}
                                        >
                                            Edit
                                        </Link>{" "}
                                        |{" "}
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
                <div className="d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange.bind(this)}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
            </div>
        );
    }
}
export default Listing;
