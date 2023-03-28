import React from "react";

const Discover = ({img,title}) => {
    return (
        <div className="col-3 col-sm-3 col-md-11 col-lg-2 mb-4 mt-4">
            <div className="card p-0 overflow-hidden h-100 shadow ">
                <img className='card-img-top img-fluid' src={img} alt=""/>
                <div className="card-body text-center">
                    <h4 className="card-title text-dark">{title}</h4>
                </div>
            </div>
        </div>
    )
}

export default Discover;