import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

const handleFormSubmit = event => {
		
				event.preventDefault()
				if (!user.name || !user.age || !user.gender || !user.address) {console.log(user.gender);}
        else
			{	props.updateUser(user.id, user)}
			
	}

  return (
   <form noValidate onSubmit={handleFormSubmit}>
    <div>
			<label>Name</label>
      <div>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
      </div>
    </div>

    <div>
			<label>Age</label>
      <div>
			<input type="number" name="age" value={user.age} onChange={handleInputChange} />
      </div>
    </div>

    <div>
			<label>Gender</label>
      <div>
        <input type="radio" name="gender" value="Male" checked={user.gender === "Male"} onChange={handleInputChange} />
        <label>Male</label>
        <input type="radio" name="gender" value="Female" checked={user.gender === "Female"} onChange={handleInputChange} />
        <label>Female</label>
      </div>
    </div>

    <div>
			<label>Address</label>
      <div>
			<textarea  name="address" value={user.address} onChange={handleInputChange} rows="4" cols="20"/>
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