import { useEffect, useState } from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'

export default function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])
  const githubURL = import.meta.env.VITE_GITHUB_URL
  const fetchUsers = async () => {
    const response = await fetch(`${githubURL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
      },
    })
    const data = await response.json()
    setUsers(data)
    setLoading(false)
  }

  if (loading) return <Spinner />

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-colos-2">
      {users?.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}
