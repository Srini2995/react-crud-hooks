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
    <div>
			<label>Name</label>
      <div>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
      {error.name && <p>{error.name}</p>}
      </div>
    </div>

    <div>
			<label>Age</label>
      <div>
			<input type="number" name="age" value={user.age} onChange={handleInputChange} />
      {error.age && <p>{error.age}</p>}
      </div>
    </div>

    <div>
			<label>Gender</label>
      <div>
			<input type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={handleInputChange} />
      <label>Male</label>
      <input type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={handleInputChange} />
      <label>Female</label>
      {error.gender && <p>{error.gender}</p>}
      </div>
    </div>

    <div>
			<label>Address</label>
      <div>
			<textarea  name="address" value={user.address} onChange={handleInputChange} rows="4" cols="20"/>
      {error.address && <p>{error.address}</p>}
      </div>
    </div>

     <div>
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </div>
    </form>
  )
}

export default EditUserForm