import {$authHost, $host} from "./index"; //
import jwtDecode from "jwt-decode";

export const registration = async (email, password) => { ///, first_name, last_name, date_of_birth, role
    const {data} = await $host.post('api/user/registration')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async (email, password, role) => {
    const {data} = await $authHost.get('api/user/check')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}