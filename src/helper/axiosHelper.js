import axios from 'axios'

const rootApi = 'http://localhost:8000/api/v1'
const userApi = rootApi + "/user"
const loginApi = userApi + "/login"

// ================ user api

export const postUser = async(userObj) => {
    try {
        const { data } = await axios.post(userApi, userObj)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message
        }
    }
}

export const loginUser = async(user) => {
    try {
        const { data } = await axios.post(loginApi, user)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return {
            status: "error",
            message: error.message
        }
    }
}