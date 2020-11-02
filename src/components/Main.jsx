import React, { Component } from "react";
import WithLoading from "./WithLoading";
import ApplicantsList from "./ApplicantsList";
import Search from "./Search";
import StatsBar from "./StatsBar";
import "./main.css";

const ListWithLoading = WithLoading(ApplicantsList);

class Main extends Component {
  state = {
    applicants: [],
    loading: false,
    searchValue: null,
    stats: 0,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      `https://cors-anywhere.herokuapp.com/https://5f9acd1b9d94640016f7146c.mockapi.io/applicants`
    )
      .then((json) => json.json())
      .then((applicants) => {
        this.setState({ loading: false, applicants: applicants });
      })
      .catch((err) => console.error(err));
  }

  search = (searchValue) => {
    this.setState({ searchValue: searchValue });
  };

  render() {
    const { applicants } = this.state;
    const countAppointments = applicants.filter((ele) => ele.appointment);
    const countViewed = applicants.filter((ele) => ele.viewed);
    const countInterested = applicants.filter((ele) => ele.interested);
    const countOffer = applicants.filter((ele) => ele.offer);

    const total =
      +countAppointments.length +
      +countViewed.length +
      +countInterested.length +
      +countOffer.length;

    return (
      <main>
        <div className="top">
          <StatsBar
            total={total}
            newOffer={countOffer.length}
            viewed={countViewed.length}
            appointment={countAppointments.length}
            other={countInterested.length}
          />
          <div className="search mt-2">
            <Search search={this.search} />
          </div>
        </div>
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
