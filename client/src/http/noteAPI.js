import {$host} from "./index";

export const create = async (name, id_patient, id_doctor, date, text, recomendation) => {
    const response = await $host.post('api/type/create')
    return response
}


export const getAll = async (id) => {
    const response = await $host.get('api/type/getAll')
    return response
}