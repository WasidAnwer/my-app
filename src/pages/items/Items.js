import React from "react";
import "../../css/product/item.css";
function Items() {
    return (
        <>
            <div className="add-item">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="create">

                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="item-add">
                                <form action="#">
                                    <div className="cards">

                                    </div>
                                </form>
                                <div className="item-inpt">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="item-field">
                                                <label>Brand Name</label>
                                                <input type="text" id="text-input" name="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="item-field">
                                                <label>Brand Name</label>
                                                <input type="text" id="text-input" name="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Items;