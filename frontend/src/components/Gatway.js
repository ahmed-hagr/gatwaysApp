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
    this.handleGetgatways( );
  }
  handleGetgatways = async () => {

    const data = await fetch("/Gatways");
    const gatways = await data.json();

    const gatway =gatways.filter(gatway => gatway.id == this.props.match.params.id.substring(1))
    console.log(gatway)
    this.setState({
      gatway: gatway,
    });
    console.log(this.state.gatway)
    
  };

  render() {
    return (
      <section>
         <div className="col-12 my-3">
              <div class="alert alert-primary" role="alert">
              {console.log(this.state.gatway)}
              </div>
            </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <Addgatwayform
                // addgatway={this.addgatway}
                handleGetgatways={this.handleGetgatways}
              />
            </div>
            <div className="col-12 my-3">
              <div class="alert alert-primary" role="alert">
                Gateways List
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
                  {this.state.gatway.map((item) => (
                    <tr>
                      <td>{item.displayName}</td>
                      <td>{item.ipv4_address}</td>
                      <td>
                        {item.p_devices
                          ? item.p_devices.map((device) => (
                              <h6>{device.vendor + " - " + device.uid}</h6>
                            ))
                          : "0 devices"}
                      </td>
                      <td>actions</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

// Login.contextType = AuthContext;