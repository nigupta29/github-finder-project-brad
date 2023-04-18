import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const GITHUB_API_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)
  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    })
  }

  // testing purpose to check whether the things are loading
  const fetchUsers = async () => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_API_TOKEN}`,
      },
    })
    const data = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
  }

  // search users with help of search from input field
  const searchUsers = async text => {
    setLoading()
    const params = new URLSearchParams({
      q: text,
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_API_TOKEN}`,
      },
    })
    const { items } = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  // clear users from the states
  const clearUsers = () =>
    dispatch({
      type: 'CLEAR_USERS',
    })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
