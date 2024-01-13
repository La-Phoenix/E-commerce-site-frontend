import { ApiError } from './types/ApiError'

export const getError = (error: ApiError) => {

    return error.response && error.response.data.message ? error.response.data.message : error.name === 'AxiosError' ? error.message: error.message
}