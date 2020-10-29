import React, { Component } from "react";

import ApplicantsList from "./ApplicantsList";
import WithLoading from "./WithLoading";

const ListWithLoading = WithLoading(ApplicantsList);

class Main extends Component {
  state = {
    applicants: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://5f9acd1b9d94640016f7146c.mockapi.io/applicants`)
      .then((json) => json.json())
      .then((applicants) => {
        this.setState({ loading: false, applicants: applicants });
      });
  }
  render() {
    return (
      <ListWithLoading
        isLoading={this.state.loading}
        applicants={this.state.applicants}
      />
    );
  }
}
export default Main;
