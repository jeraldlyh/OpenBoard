import axiosInstance from "../axios/axiosInstance"

export const registerUser = (body: object) => {
    axiosInstance.post("/api/account/register/", body).then(response => console.log(response))
}

export const loginUser = async (body: object) => {
    const response = await axiosInstance.post("/api/account/login/", body)
    return response
}