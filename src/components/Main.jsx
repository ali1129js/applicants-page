import React, { Component } from "react";
import WithLoading from "./WithLoading";
import ApplicantsList from "./ApplicantsList";
import Search from "./Search";

const ListWithLoading = WithLoading(ApplicantsList);

class Main extends Component {
  state = {
    applicants: [],
    loading: false,
    searchValue: null,
    v2: [],
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://5f9acd1b9d94640016f7146c.mockapi.io/applicants`)
      .then((json) => json.json())
      .then((applicants) => {
        this.setState({ loading: false, applicants: applicants });
      });

    fetch(`https://5f9acd1b9d94640016f7146c.mockapi.io/v2`)
      .then((json) => json.json())
      .then((categories) => {
        this.setState({ loading: false, v2: categories });
      });
  }

  search = (searchValue) => {
    this.setState({ searchValue: searchValue });
  };

  render() {
    return (
      <main>
        <Search search={this.search} />
        <ListWithLoading
          isLoading={this.state.loading}
          applicants={this.state.applicants}
          searchValue={this.state.searchValue}
          v2={this.state.v2}
        />
      </main>
    );
  }
}
export default Main;
