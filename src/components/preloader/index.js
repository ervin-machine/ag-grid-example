import React from 'react'
import "./Preloader.css"

function Preloader() {

  return (
    <div className='ag-overlay-loading-center'>
        <div className="scene">
            <div className="shadow"></div>
            <div className="jumper">
                <div className="spinner">
                    <div className="scaler">
                        <div className="loader">
                            <div className="cuboid">
                                <div className="cuboid__side"></div>
                                <div className="cuboid__side"></div>
                                <div className="cuboid__side"></div>
                                <div className="cuboid__side"></div>
                                <div className="cuboid__side"></div>
                                <div className="cuboid__side"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Preloader