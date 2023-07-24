import produce from 'immer'
import { types } from '../constants'

export const initialState = {
    data: [],
    errorMessage: false,
    isLoading: false,
}

const binanceDataReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case types.FETCH_DATA_REQUEST:
                draft.isLoading = true;
                break
            case types.FETCH_DATA_SUCCESS:
                draft.data = action.payload
                draft.isLoading = false;
                draft.errorMessage = false;
                break;
            case types.FETCH_DATA_FAILURE:
                draft.isLoading = false;
                draft.errorMessage = true;
                draft.error = action.payload
                break;
            default:
                break;
        }
    })

export default binanceDataReducer