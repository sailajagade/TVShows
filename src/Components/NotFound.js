import React, { Component, Fragment } from "react";
import "../Css/Shows.css";

class NotFound extends Component {
  routeToMain = () => {
    this.props.history.push({ pathname: "/" });
  };
  render() {
    let { searchFlag = false } = this.props;
    return (
      <Fragment>
        {!searchFlag ? (
          <div className="center">
            Page Not found <br />
            <a href="/"> Go To Home</a>
          </div>
        ) : (
          <div className="center">
            No Shows Found <br />
          </div>
        )}
      </Fragment>
    );
  }
}

export default NotFound;
