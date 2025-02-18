import React from "react";
import "../css/product/details.css";
import imgPro from "../img/product-10.webp";

function Details() {

    return (
        <div className="product-edit">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="pro-img">
                            <figure>
                                <img src={imgPro} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="pro content">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Details;
