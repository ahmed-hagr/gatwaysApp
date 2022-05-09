import React, { useEffect, useState } from "react";
// import {Link} from 'react-router-dom';
import Addgatwayform from "./addGatwayform";

import {

  Link 
} from "react-router-dom";

export default class Gatways extends React.Component {
  state = {
    data: [],
    items: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.context.check()
    this.handleGetgatways();
  }
  handleGetgatways = async () => {
    const data = await fetch("/Gatways");
    const items = await data.json();
    this.setState({
      data: data,
      items: items,
    });
  };

  render() {
    return (
      <section>
        <div className="container">
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
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map((item) => (
                    <tr>
                      <td>
                        <Link
                          // className="br-logo justify-content-center mb-2 pl-0"
                          to={"/Gatway:" + item.id}
                        >
                          {item.displayName}
                        </Link>
                      </td>
                      <td>{item.ipv4_address}</td>
                      <td>
                        {item.p_devices
                          ? item.p_devices.map((device) => (
                              <h6>{device.vendor + " - " + device.uid}</h6>
                            ))
                          : "0 devices"}
                      </td>
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
