import React, { useState, useEffect } from 'react'
import ValidateUser from '../ValidateUser'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)
  const [ error, setError ] = useState({})
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  
//Handling Input change
  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
//Handling Edit user button
const handleFormSubmit = event => {
		
				event.preventDefault()
			let listOfErrors = ValidateUser(user)
          setError(listOfErrors)
     
        if(Object.keys(listOfErrors).length === 0)
			  {	props.updateUser(user.id, user)
           setError({})
        }
			
	}

  return (
  	<form noValidate onSubmit={handleFormSubmit}>
    <div  className="form-group ">
			<label htmlFor="name" >Name</label>
      
			<input className="form-control"   type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Name"/>
      {error.name && <p className=" alert-danger ">{error.name}</p>}
     
    </div>

    <div className="form-group">
			<label htmlFor="age">Age</label>
    
			<input className="form-control" type="number" name="age" value={user.age} onChange={handleInputChange} placeholder="Age"/>
      {error.age && <p className="alert-danger">{error.age}</p>}
      
    </div>

    <div className="form-group">
			<label htmlFor="gender" >Gender</label>
      <div>
			<input className="radio mr-2" type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={handleInputChange} />
      <label htmlFor="radioMale" className=" mr-4">Male</label>
      <input className="radio mr-2" type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={handleInputChange} />
      <label htmlFor="radioFemale" className=" mr-4">Female</label>
      {error.gender && <p className="alert-danger">{error.gender}</p>}
      </div>
    </div>

    <div className="form-group">
			<label htmlFor="address" >Address</label>
      
			<textarea className="form-control"  name="address" value={user.address} onChange={handleInputChange} rows="4" cols="20"/>
      {error.address && <p className="alert-danger">{error.address}</p>}
     
    </div>


    <div className="form-group">
      <button className="btn btn-primary mr-2">Update user</button>
      <button className="btn btn-danger muted-button" onClick={() => props.setEditing(false)} >
        Cancel
      </button>
    </div>
    </form>
  )
}

export default EditUserForm