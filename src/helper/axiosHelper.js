import axios from 'axios'

const rootApi = 'http://localhost:8000/api/v1'
const userApi = rootApi + "/user"

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