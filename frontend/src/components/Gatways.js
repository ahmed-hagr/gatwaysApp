import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

function Tweet() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/Gatways');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>    
    {
            items.map(item => (
    <table class="table table-striped">
  <thead>
    <tr>
      
      <th scope="col">gateway name :{item.displayName}</th>
      <th scope="col">gatway ipv4 : {item.ipv4_address}</th>
      <th scope="col">gatway devices : {item.p_devices.length}</th>
      <th scope="col"><button type="button" class="btn btn-danger">delete gatway</button>
</th>

    </tr>
  </thead>
  <tbody>
  {item.p_devices.length ?item.p_devices.map(device =>
    <tr>
      
      <td>device uid :{ device.uid}</td>
      <td>device vendor : {device.vendor}</td>
      <td>created Date : {device.createdDate}</td>
      <td>status : {device.status ==0?"offline" :"online"}</td>

    </tr>
       ): null}
  </tbody>
</table>
))
}
           
</div>
</div>
</div>           
        </section>

    );
}

export default Tweet;