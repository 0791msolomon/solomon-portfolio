import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
import BreadCrumbs from "./BreadCrumbs";

import { connect } from "react-redux";
import { activeVotingSelection, votingOptions } from "../actions";

class Voting extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount = () => {
    this.props.votingOptions();
  };
  voteOn = item => {
    this.props.activeVotingSelection(item);
  };
  getTotalVotes = () => {
    let count = 0;
    this.props.selectOptions.map(item => {
      count += item.votes;
    });
    return `Out of ${count} total votes`;
  };

  renderList = () => {
    let totalVotes = 0;
    this.props.selectOptions.map(item => {
      totalVotes += item.votes;
    });
    return this.props.selectOptions.map(item => {
      item.percent = Math.floor((item.votes / totalVotes) * 100);
      let barColor = null;
      if (item.percent > 25 && item.percent < 50) {
        barColor = "bg-warning";
      } else if (item.percent >= 50 && item.percent <= 75) {
        barColor = "bg-info";
      } else if (item.percent > 75) {
        barColor = "bg-success";
      } else if (item.percent <= 25) {
        barColor = "bg-danger";
      }
      return (
        <div className="votingOption" key={item.name}>
          <img
            src={item.image}
            className="votingImage"
            onClick={() => this.voteOn(item)}
            alt="pic to vote on"
          />
          <ProgressBar
            style={{ width: `${item.percent}%` }}
            color={`${barColor}`}
            className={`progress-bar progress-bar-striped progress-bar-animated`}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <BreadCrumbs breadCrumb={"Voting app"} />
        <h1 style={{ textAlign: "center" }}>
          <u>
            <strong> Click on image to add vote</strong>
          </u>
        </h1>
        <div className="test2container">
          <div className="votingAppImages col-lg-8 col-sm-12">
            {this.renderList()}
          </div>
          <div className="votingAppDisplay col-lg-4 col-sm-12">
            {this.props.ActiveVote ? (
              <div className="votingAppDisplay">
                <h5>{this.getTotalVotes()}</h5>
                <img
                  className="activeImage"
                  src={this.props.ActiveVote.image}
                  alt="pic to vote on"
                />
                <p className="activeVoteVotes">{`${
                  this.props.ActiveVote.name
                } has ${this.props.ActiveVote.votes}!`}</p>
              </div>
            ) : (
              "noting here yet"
            )}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ selectOptions, ActiveVote }) {
  return {
    selectOptions,
    ActiveVote
  };
}
export default connect(
  mapStateToProps,
  { activeVotingSelection, votingOptions }
)(Voting);
