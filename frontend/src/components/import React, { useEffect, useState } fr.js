import React, { useEffect, useState } from "react";
// import {Link} from 'react-router-dom';
import Addgatwayform from "./addGatwayform";
import { useParams } from "react-router-dom";

export default class Gatway extends React.Component {
  state = {
    gatway: [],

  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.handleGetgatways(this.props.match.params.id );
  }
  handleGetgatways = async (id) => {

    console.log(id)
    const data = await fetch("/Gatways");
    const gatways = await data.json();

    const gatway =await gatways.filter(gatway => gatway.id == id.substring(1))
    console.log(gatway)
    this.setState({
      gatway: gatway,
    });
    console.log(this.state.gatway)
    
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              {/* <Addgatwayform
                // addgatway={this.addgatway}
                handleGetgatways={this.handleGetgatways}
              /> */}
            </div>
            <div className="col-12 my-3">
              <div class="alert alert-primary" role="alert">
                {this.state.gatway.displayName}
              </div>
            </div>
            <div className="col-12 my-2">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Gateway Name</th>
                    <th scope="col">IP Address</th>
                    <th scope="col">Peripheral Devices</th>
                    <th scope="col">actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.gatway.p_devices.map((device) => (
                    <tr>
                      <td>{device.vendor}</td>
                      <td>{device.uid}</td>
                      <td>
                       {device.status==0?"offline":"online"}
                      </td>
                      <td>actions</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// Login.contextType = AuthContext;
