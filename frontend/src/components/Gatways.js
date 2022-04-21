import React, { useEffect, useState } from "react";
// import {Link} from 'react-router-dom';
import Addgatwayform from "./addGatwayform"
function Tweet() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/Gatways");
    const items = await data.json();
    setItems(items);
  };
  
  return (
    <section>
      <div className="container">
        <div className="row">
         
          <div className="col-12 mt-5">
          <Addgatwayform
          // addgatway={this.addgatway}
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
  {items.map((item) => (
    <tr>
    
      <td>{item.displayName}</td>
      <td>{item.ipv4_address}</td>
      <td>
      {item.p_devices
                    ? item.p_devices.map((device) => (
                    <h6>{
                      device.vendor + " - " + device.uid 
                      }</h6>
                    
                      ))  
                    :"0 devices"}
        </td>
      <td>actions</td>

    </tr>

))}
</tbody>

</table>
            {/* {items.map((item) => (
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">gateway </th>
                    <th scope="col"> name :{item.displayName}</th>
                    <th scope="col">gatway ipv4 : {item.ipv4_address}</th>
                    <th scope="col">
                      gatway devices : {item.p_devices.length}
                    </th>
                    <th scope="col">
                      <button type="button" class="btn btn-danger">
                        delete gatway
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {item.p_devices.length
                    ? item.p_devices.map((device) => (
                        <tr>
                          <td>device uid :{device.uid}</td>
                          <td>device vendor : {device.vendor}</td>
                          <td>created Date : {device.createdDate}</td>
                          <td>
                            status : {device.status == 0 ? "offline" : "online"}
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tweet;
