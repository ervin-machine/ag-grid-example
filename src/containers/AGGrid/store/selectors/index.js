import { createSelector } from 'reselect'
import { get } from 'lodash'

const selectData = state => state.aggrid

const selectBinanceData = () => createSelector(selectData, selectData => get(selectData, 'data'))

export { selectBinanceData }
