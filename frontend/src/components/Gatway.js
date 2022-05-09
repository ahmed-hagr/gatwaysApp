import React, { useEffect, useState } from "react";
// import {Link} from 'react-router-dom';
import Adddeviceform from "./adddevice";
import { useParams } from "react-router-dom";

export default class Gatway extends React.Component {
  state = {
    gatway: [],
    devices: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.handleGetgatways();
  }
  handleGetgatways = async () => {
    const data = await fetch("/Gatways");
    const gatways = await data.json();

    const gatway = gatways.filter(
      (gatway) => gatway.id == this.props.match.params.id.substring(1)
    );
    console.log(Object(gatway[0]));
    const gatwayobject = Object(gatway[0]);
    const devices = gatwayobject.p_devices;
    this.setState({
      gatway: gatwayobject,
      devices: devices,
    });
    console.log(this.state.gatway);
  };

  render() {
    return (
      <section>
        <div className="col-12 my-3">
          <div class="alert alert-primary" role="alert">
            {this.state.gatway.displayName}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-3">
              <div class="alert alert-primary" role="alert">
                <div className="d-flex">
                  <div className="col-12 pt-2 text-center">
                    <span className="">devices List</span>
                  </div>
                  {/* <div className="col-6 text-right">
                    <button
                      type="button"
                      class="btn btn-primary "
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Launch demo modal
                    </button>
                    <Adddeviceform/>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-12 my-2">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Device Name</th>
                    <th scope="col">uid Address</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log(this.state.devices)} */}
                  {/* {this.state.gatway.p_devices.map((device)=>{
                    console.log(device)
                  })} */}
                  {this.state.devices.map((device) => (
                    <tr>
                      <td>{device.vendor}</td>
                      <td>{device.uid}</td>

                      <td>{device.status == 1 ? "online" : "offline"}</td>
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
