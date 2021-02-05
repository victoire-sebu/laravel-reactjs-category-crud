import React, { Component } from "react";

class Add extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div class="form-group">
                        <label for="category_name">Category name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category_name"
                            aria-describedby="emailHelp"
                            placeholder="Category name"
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
export default Add;
