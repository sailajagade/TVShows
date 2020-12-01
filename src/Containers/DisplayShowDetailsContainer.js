import React, { Component } from "react";
import { SHOW_SELECT } from "../Api/Url";
import { getData } from "../Api/Api";
import DisplayShowDetails from "../Components/DisplayShowDetails";

import { onSelect } from "./CommonMethods";

class displayShowDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFlag: false,
    };
  }
  componentDidMount = () => {
    const Url = window.location.hash.split("/");
    let selectData = onSelect(Url[Url.length - 1]);
    const episodeUrl = SHOW_SELECT + Url[Url.length - 1] + "/episodes";
    const castUrl = SHOW_SELECT + Url[Url.length - 1] + "/cast";
    const crewUrl = SHOW_SELECT + Url[Url.length - 1] + "/crew";
    const galleryUrl = SHOW_SELECT + Url[Url.length - 1] + "/images";

    Promise.all([
      getData(episodeUrl),
      getData(castUrl),
      getData(crewUrl),
      getData(galleryUrl),
    ]).then((values) => {
      this.setState({
        episodeData: values[0].data,
        castData: values[1].data,
        crewData: values[2].data,
        galleryData: values[3].data,
      });
    });

    selectData.then((res) => {
      this.setState(
        {
          showData: res.data,
          showName: Url[Url.length - 1],
        },
        this.routeToDetails
      );
    });
  };
  routeToDetails = () => {
    this.props.history.push({
      pathname: `/showdetails/${this.state.showName}`,
      state: {
        showData: this.state.showData,
        showTab: this.state.showTab,
        fetchShows: this.fetchShows,
      },
    });
  };

  routeback = () => {
    this.setState({
      searchFlag: false,
    });
    this.props.history.push({ pathname: "/" });
  };

  render() {
    const { episodeData, castData, crewData, galleryData } = this.state;
    return (
      <div>
        <DisplayShowDetails
          showData={this.state.showData}
          paginate={this.paginate}
          routeback={this.routeback}
          episodeData={episodeData}
          castData={castData}
          crewData={crewData}
          galleryData={galleryData}
        />
      </div>
    );
  }
}

export default displayShowDetailsContainer;
