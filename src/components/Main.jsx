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
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://5f9acd1b9d94640016f7146c.mockapi.io/applicants`)
      .then((json) => json.json())
      .then((applicants) => {
        this.setState({ loading: false, applicants: applicants });
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
        />
      </main>
    );
  }
}
export default Main;
