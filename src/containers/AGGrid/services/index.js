import axiosClient from "../../../utils/axios"

const BINANCE_ENDPOINT = '/ticker/24hr'

export const getBinanceData = () => {
    return axiosClient.get(`${BINANCE_ENDPOINT}`)
}