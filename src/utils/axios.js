import axios from 'axios'

import { REACT_APP_API_URL, REACT_APP_API_VERSION } from '../config'

const singletonEnforcer = Symbol()

class AxiosClient {
    axiosClient
    static aciosClientInstance

    constructor(enforcer) {
        if(enforcer !== singletonEnforcer) {
            throw new Error('Cannot initialise Axios client single instance')
        }


        this.axiosClient = axios.create({
            baseURL : REACT_APP_API_URL + REACT_APP_API_VERSION,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })

        
        this.axiosClient.interceptors.request.use(
            (configure) => {
                return configure
            },
            (error) => {
                return Promise.reject(error.response.data.message)
            }
        )

        this.axiosClient.interceptors.response.use(
            (response) => {
                return response.data
            },
            (error) => {
                return Promise.reject(error.response.data.message)
            }
        )
    }

    static get instance() {
        if(!this.axiosClientInstance) {
            this.axiosClientInstance = new AxiosClient(singletonEnforcer)
        }

        return this.axiosClientInstance
    }

    get(resource, config = {}) {
        const requestURL = `${resource}`
        return this.axiosClient
            .get(requestURL, config)
    }
}

export default AxiosClient.instance