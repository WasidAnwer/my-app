import React from "react";
import "../../css/product/item.css";
import pro from "../../img/pic.jpg";
function Items() {
    return (
        <div className="add-item">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="preview">
                            <div className="box">
                                <figure>
                                    <img src={pro} alt="" />
                                </figure>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="adding">
                            <div className="card">
                                <div className="card-body">

                                </div>
                            </div>
                            <div className="row">
                                <span>Product Information</span>
                                <div className="field">
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Items;