import React from 'react'
import { Table } from "react-bootstrap";

const UserTable = props => (
  <table className="table table-hover">
    <thead >
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Gender</th>
        <th scope="col">Address</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      
       { props.users.map(user => (
          <tr key={user.id} scope="row">
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.address}</td>
            <td className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="btn btn-primary muted-button mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
       
    </tbody>
  </table>
)

export default UserTable