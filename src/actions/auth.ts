import axiosInstance from "../axios/axiosInstance"

export const registerMongo = async (body: object) => {
    const response = await axiosInstance.post("/api/account/register/", body)
    return response
}