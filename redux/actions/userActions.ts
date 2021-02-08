import axios from '../../axios/axios'
import { SET_USERS, SET_SINGLE_USER, ADD_USERS } from './types'
import { Dispatch } from 'redux'
import { User } from '../../types/types'

export const getUsers = (count = 10, page = 1) => (dispatch: Dispatch) => (
  axios.get(`?page=${page}&results=${count}`)
    .then(res => {
      dispatch({ type: (page === 1)? SET_USERS: ADD_USERS, payload: res.data.results })
    })
    .catch(err => {
      alert(JSON.stringify(err, null, 2))
    })
)

export const getSingleUser = (user: User) => (dispatch: Dispatch) => (
  dispatch({ type: SET_SINGLE_USER, payload: user })
)