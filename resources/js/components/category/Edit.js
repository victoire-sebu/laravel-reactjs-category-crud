import React, { Component } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import SuccessAlert from "../SuccessAlert";
import ErrorAlart from "../ErrorAlert";

class Edit extends Component {
    constructor(props) {
        super(props);

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            category_name: "",
            alert_message:"",
        };
    }

    componentDidMount() {
        axios
            .get(API_BASE_URL + "/category/edit/" + this.props.match.params.id)
            .then((response) => {
                this.setState({ category_name: response.data.name });
            });
    }

    onChangeCategoryName(e) {
        this.setState({
            category_name: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const category = {
            category_name: this.state.category_name,
        };

        axios
            .put(
                API_BASE_URL + "/category/update/" + this.props.match.params.id,
                category
            )
            .then((res) => {
                this.setState({alert_message:"success"})
            })
            .catch((error) => {
                this.setState({alert_message:"error"})
            });
    }

    render() {
        return (
            <div className="container">
                <hr />
                {this.state.alert_message == "success" ? <SuccessAlert /> : null }
                {this.state.alert_message=="error"?<ErrorAlart/>:null}
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label for="category_name">Category name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category_name"
                            aria-describedby="emailHelp"
                            placeholder="Category name"
                            value={this.state.category_name}
                            onChange={this.onChangeCategoryName}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
export default Edit;
