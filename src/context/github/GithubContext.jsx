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

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
