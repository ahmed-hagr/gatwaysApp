import React, { useEffect, useState } from "react";
// import {Link} from 'react-router-dom';
import Addgatwayform from "./addGatwayform";

export default class Login extends React.Component {
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
    //     const data = await fetch("/Gatways");
    // const items = await data.json();
    // setItems(items)
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
                    <th scope="col">actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map((item) => (
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
        </div>
      </section>
    );
  }
}

// Login.contextType = AuthContext;
