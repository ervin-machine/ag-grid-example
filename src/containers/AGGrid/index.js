import React, { useState, useMemo, useCallback } from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectBinanceData} from "./store/selectors"
import { fetchData } from "./store/actions"

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './AGGrid.css'

import Preloader from "../../components/preloader";

const AGGrid = React.memo(function AGGrid(props) {
    const { fetchData, binanceData } = props;
    
    const [columnDefs] = useState([
        { field: 'symbol', sortable: true },
        { field: 'askPrice' },
        { field: 'askQty' },
        { field: 'bidPrice',  },
        { field: 'bidQty' },
        { field: 'closeTime' },
        { field: 'count',  },
        { field: 'firstId' },
        { field: 'highPrice' },
        { field: 'lastId',  },
        { field: 'lastPrice' },
        { field: 'lastQty' },
        { field: 'lowPrice',  },
        { field: 'openPrice' },
        { field: 'openTime' },
        { field: 'prevClosePrice',  },
        { field: 'priceChange' },
        { field: 'priceChangePercent' },
        { field: 'quoteVolume' },
        { field: 'volume' },
        { field: 'weightedAvgPrice' },
    ]);

    const paginationNumberFormatter = useCallback((params) => {
        return '[' + params.value.toLocaleString() + ']';
      }, []);

      const noRowsOverlayComponent = useMemo(() => {
        return Preloader;
      }, []);

      const onGridReady = useCallback((params) => {
        fetchData();
        // eslint-disable-next-line
      }, []);

      const rowClassRules = useMemo(() => {
        return {
          'ag-grid-rows': (params) => {
            var paramsData = params.data.askPrice;
            return paramsData >= 0;
          },
        };
      }, []);
      
    return (
        <div className="ag-theme-alpine ag-grid">
          <p className="ag-grid-header">AG GRID - BINANCE DATA</p>
          <AgGridReact
            overlayLoadingTemplate={noRowsOverlayComponent}
            noRowsOverlayComponent={noRowsOverlayComponent}
            rowData={binanceData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
            paginationNumberFormatter={paginationNumberFormatter}
            onGridReady={onGridReady}
            sortable={true}
            rowClassRules={rowClassRules}
          >
          </AgGridReact>
        </div>
	);
});

const mapStateToProps = createStructuredSelector({
    binanceData: selectBinanceData(),
  })
  
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            dispatch(fetchData())
        },
    }
}
  
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default (withConnect)(AGGrid)