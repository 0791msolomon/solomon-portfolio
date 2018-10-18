import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Sparkline = props => {
  return (
    <div className="container sparklineContainer col-12">
      <div className="sparklineText col-lg-3 col-md-6 col-sm-12">
        <p>{props.text}</p>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <h6 style={{ textAlign: "center" }}>Temperature</h6>
        <Sparklines data={props.temperature}>
          <SparklinesLine color="red" />
        </Sparklines>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        {" "}
        <h6 style={{ textAlign: "center" }}>Chance of precipitation</h6>
        <Sparklines data={props.precipitation}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        {" "}
        <h6 style={{ textAlign: "center" }}>Humidity</h6>
        <Sparklines data={props.humidity}>
          <SparklinesLine />
        </Sparklines>
      </div>
    </div>
  );
};
export default Sparkline;
