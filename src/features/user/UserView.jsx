import React, { useEffect } from 'react'
import { fetchUsers} from './userSlice'
import { useDispatch, useSelector } from 'react-redux'


const UserView = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>...Loading</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? <ul>
        {
          user.users.map((user) => {
           return  <li key={user.id}>{user.name}</li>
          })
        }
      </ul> : null}
    </div>
  )
}

export default UserView