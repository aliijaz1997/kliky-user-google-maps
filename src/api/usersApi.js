/* eslint-disable consistent-return */
import axios from "axios"

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`https://dummyjson.com/users?limit=20`)

    return {
      ...data,
      users: data.users.map(user => {
        return { ...user, open: user.id % 2 === 0 ? true : false }
      })
    }
  } catch (error) {
    console.log(error)
  }
}
