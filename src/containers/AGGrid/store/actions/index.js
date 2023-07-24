import { types } from "../constants"
import { getBinanceData } from "../../services"
import { dateFormat } from "../../../../utils/dateFormat";

const fetchDataRequest = () => {
    return {
        type: types.FETCH_DATA_REQUEST
    }
}

const fetchDataSuccess = (data) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload: data
    }
}

const fetchDataFailure = (err) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload: err
    }
}

export const fetchData = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest())
        try {
            const data = await getBinanceData()

            const dateFormatedData = data.map(el => { return {...el, openTime: dateFormat(el.openTime), closeTime: dateFormat(el.closeTime)} })
    
            dispatch(fetchDataSuccess(dateFormatedData))
        } catch (err) {
            dispatch(fetchDataFailure(err))
        }
    }
}
