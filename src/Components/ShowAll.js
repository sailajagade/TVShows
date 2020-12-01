import React, { Component } from "react";
import "../Css/Shows.css";
class ShowAll extends Component {
  render() {
    const { currentPosts, onShowSelect, routeback } =
      this.props && this.props.location && this.props.location.state;
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-expand-md nav">
          <li className="nav-link home-btn" onClick={routeback}>
            <i className="fa fa-home"></i>
          </li>
        </nav>

        <div className="">
          <div className="card-group">
            <div className="card ">
              <div className="row show-margin">
                {currentPosts &&
                  currentPosts.map((text, index) => (
                    <div
                      className=" col-5 col-lg-2 col-md-4"
                      key={index}
                      onClick={() => onShowSelect(text.id)}
                    >
                      <img
                        className="card-img-top showAll"
                        src={text.image && text.image.medium}
                        alt="Card  cap"
                      />
                      <div className="card-block">
                        <div className="p-2 rating">
                          Rating: {text.rating && text.rating.average}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowAll;
