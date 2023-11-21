import axios from 'axios'

const rootApi = 'http://localhost:8000/api/v1'
const userApi = rootApi + "/user"
const loginApi = userApi + "/login"
const transApi = rootApi + "/transaction"

const getUserId = () => {
    const userJson = sessionStorage.getItem('user');

  const userObj = JSON.parse(userJson);
  return userObj?._id || null

}

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

export const postTrans = async(transObj) => {
    try {
        const userId = getUserId()
        if(!userId){
            return {
                status: 'error',
                message: 'userId not found'
            }
        }
        const { data } = await axios.post(transApi, transObj, { headers: {
            Authorization: userId,
        }})
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

export const getTrans = async() => {
    try {
        const userId = getUserId()
        if(!userId){
            return {
                status: 'error',
                message: 'userId not found'
            }
        }
        const { data } = await axios.get(transApi, { headers: {
            Authorization: userId,
        }})
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

export const deleteTrans = async(idArgs) => {
    try {
        const userId = getUserId()
        if(!userId){
            return {
                status: 'error',
                message: 'userId not found'
            }
        }
        const { data } = await axios.delete(transApi,{ data: idArgs, 
            headers: {
            Authorization: userId,
        }})
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