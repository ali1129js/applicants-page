import React from "react";
import Spinner from "./Spinner";

const WithLoading = (Component) => {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="h1 p-5 m-5">
        <p>Hold on fetching data might take some time.</p>

        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-grow spinner-grow-lg"
            role="status"
            aria-hidden="true"
          ></span>
          Hold on fetching data might take some time.
        </button>
        <Spinner />
      </div>
    );
  };
};
export default WithLoading;
