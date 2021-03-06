import axios, { AxiosInstance } from 'axios';

export const roomsApiClient = async (): Promise<AxiosInstance> => {
    let accessToken = localStorage.getItem('accessToken')

    return axios.create({
        baseURL:  `${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_PREFIX}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export const roomsApi = {
    rooms: {
        async getRooms() {
            return (await roomsApiClient()).get('/rooms')
        },
        async getAvailableRooms(startDate: string, endDate: string, availability: boolean) {
            return (await roomsApiClient()).get(`/rooms${startDate && endDate ? `?startDate=${startDate}&endDate=${endDate}${availability ? '&availability=true' : ''}` : ''}`)
        },
        async getRoomById(id: string) {
            return (await roomsApiClient()).get(`/rooms/${id}`)
        },
        async createRoom(payload: any) {
            return (await roomsApiClient()).post('/rooms', payload)
        }
    }
}