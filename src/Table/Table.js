import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
const Table = () =>{

    const clubs=[
        {clubName:"ClubName1", description: "Description1", chairman:"Chairman1", manager:"Manager1", ground:"Ground1", winners:"France"},
        {clubName:"ClubName2", description: "Description2", chairman:"Chairman2", manager:"Manager2", ground:"Ground2", winners:"Germnay"},
        {clubName:"ClubName3", description: "Description3", chairman:"Chairman3", manager:"Manager3", ground:"Ground3", winners:"Spain"},
        {clubName:"ClubName4", description: "Description4", chairman:"Chairman4", manager:"Manager4", ground:"Ground4", winners:"Hungary"}
    ];
    const renderClubs=(club, index) =>{
        return(
            <tr key={index}>
                <td>{club.clubName}</td>
                <td>{club.description}</td>
                <td>{club.chairman}</td>
                <td>{club.manager}</td>
                <td>{club.ground}</td>
                <td>{club.winners}</td>
            </tr>
        )
    }
  return(
      <div>
          <ReactBootStrap.Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Chairman</th>
                      <th>Manager</th>
                      <th>Ground</th>
                      <th>Winners</th>
                  </tr>
              </thead>
              <tbody>
                {clubs.map(renderClubs)}
              </tbody>
          </ReactBootStrap.Table>
      </div>
  );
};

export default Table;