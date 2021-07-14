import axiosInstance from "../axios/axiosInstance"

export const registerUser = async (body: object) => {
    const response = await axiosInstance.post("/api/account/register/", body)
    return response
}

export const loginUser = async (body: object) => {
    const response = await axiosInstance.post("/api/account/login/", body)
    return response
}