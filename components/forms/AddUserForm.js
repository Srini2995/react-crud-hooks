import React, { useState, useEffect } from 'react'
import ValidateUser from '../ValidateUser'


const AddUserForm = props => {
	const initialFormState = { id: null, name: '', age: '', gender: '', address: ''  }
	const [ user, setUser ] = useState(initialFormState)
  const [ error, setError ] = useState({})

  //Handle Input Changes
	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
    
	}
 

  // Handle Add New User Button
  const handleFormSubmit = event => {
      
			event.preventDefault()
			let listOfErrors = ValidateUser(user)
          setError(listOfErrors)
     if(Object.keys(listOfErrors).length === 0)
			{	props.addUser(user)
				setUser(initialFormState)
        setError({})}

	}


	return (
		<form noValidate onSubmit={handleFormSubmit}>
    <div  className="form-group ">
			<label forHtml="name" >Name</label>
      
			<input className="form-control"   type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Name"/>
      {error.name && <p className=" alert-danger ">{error.name}</p>}
     
    </div>

    <div className="form-group">
			<label>Age</label>
    
			<input className="form-control" type="number" name="age" value={user.age} onChange={handleInputChange} placeholder="Age"/>
      {error.age && <p className="alert-danger">{error.age}</p>}
      
    </div>

    <div className="form-group">
			<label forHtml="gender">Gender</label>
      <div>
			<input className="radio mr-2" type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={handleInputChange} />
      <label className=" mr-4">Male</label>
      <input className="radio mr-2" type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={handleInputChange} />
      <label className=" mr-4">Female</label>
      {error.gender && <p className="alert-danger">{error.gender}</p>}
      </div>
    </div>

    <div className="form-group">
			<label>Address</label>
      
			<textarea className="form-control"  name="address" value={user.address} onChange={handleInputChange} rows="4" cols="20"/>
      {error.address && <p className="alert-danger">{error.address}</p>}
     
    </div>

    <div>
			<button className="btn btn-primary">Add new user</button>
    </div>
		</form>
	)
}

export default AddUserForm