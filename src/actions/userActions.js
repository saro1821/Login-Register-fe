import {
    loginFail,
    loginRequest, 
    loginSuccess, 
    clearError,
    registerFail,
    registerRequest,
    registerSuccess,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    logoutSuccess,
    logoutFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFail
} from '../slices/authSlice';


import axios from 'axios';

export const login = (email, password) => async (dispatch) => {

        try {
            dispatch(loginRequest())
            const { data }  = await axios.post(`https://login-register-be.onrender.com/api/v1/login`,{email,password});
            dispatch(loginSuccess(data))
        } catch (error) {
            dispatch(loginFail(error.response.data.message))
        }

}

export const clearAuthError = dispatch => {
    dispatch(clearError())
}

export const register = (userData) => async (dispatch) => {

    try {
        dispatch(registerRequest())
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        const { data }  = await axios.post(`https://login-register-be.onrender.com/api/v1/register`,userData, config);
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerFail(error.response.data.message))
    }

}

export const loadUser =  async (dispatch) => {

    try {
        dispatch(loadUserRequest())
       

        const { data }  = await axios.get(`/api/v1/myprofile`);
        dispatch(loadUserSuccess(data))
    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }

}

export const logout =  async (dispatch) => {

    try {
        await axios.get(`https://login-register-be.onrender.com/api/v1/logout`);
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFail)
    }

}


export const forgotPassword = (formData) => async (dispatch) => {

    try {
        dispatch(forgotPasswordRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data} =  await axios.post(`https://login-register-be.onrender.com/api/v1/password/forgot`, formData, config);
        dispatch(forgotPasswordSuccess(data))
    } catch (error) {
        dispatch(forgotPasswordFail(error.response.data.message))
    }

}

export const resetPassword = (formData, token) => async (dispatch) => {

    try {
        dispatch(resetPasswordRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data} =  await axios.post(`https://login-register-be.onrender.com/api/v1/password/reset/${token}`, formData, config);
        dispatch(resetPasswordSuccess(data))
    } catch (error) {
        dispatch(resetPasswordFail(error.response.data.message))
    }

}

