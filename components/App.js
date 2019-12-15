import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import Pagination from './Pagination'

const App = () => {
	// Data
	const usersData = []

  const initialFormState = { id: null, name: '', age: '', gender: '', address: ''  }
	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(2);
  
  

	// CRUD operations
	const addUser = user => {
   
   
		user.id = users.length + 1
		setUsers([ ...users, user ])
   
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, age: user.age, gender: user.gender, address: user.address })
	}

   // Get current posts
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;

   // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<div className="container">
			<h1>User Details</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable  users={users} editRow={editRow} deleteUser={deleteUser} />
           <Pagination
        userPerPage={userPerPage}
        totalUsers={users.length}
        paginate={paginate}
            />
				</div>
			</div>
		</div>
	)
}

export default App