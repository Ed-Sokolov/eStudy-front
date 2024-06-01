import axios, {AxiosInstance} from "axios";

const url: string = process.env.REACT_APP_BACK_URL ? process.env.REACT_APP_BACK_URL : '';

export const instance: AxiosInstance = axios.create({
    withCredentials: true,
    withXSRFToken: true,
    baseURL: url
})