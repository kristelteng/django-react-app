import React from "react";
import Chart from "../components/Chart";

export default class App2Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Chart>This is a chart!</Chart>
          </div>
        </div>
      </div>
    )
  }
}