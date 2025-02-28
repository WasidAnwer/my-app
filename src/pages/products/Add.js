import { useState } from "react";
import "../../css/product/add.css";

import P1 from "../../img/p-1.png";

function Add() {
  return (
    <>
      <section className="Add_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="product">
                <div className="content">
                  <div class="mt-3">
                    <img src={P1} alt="Product"/>
                    <h4>Men Black Slim Fit T-shirt <span>(Fashion)</span></h4>
                    <h5 class="mt-3">Price :</h5>
                    <h4><b><span>$100</span></b><b>$80</b><span>(30%Off)</span></h4>
                    <h5 class="mt-3">Size :</h5>
                    <div class="sizes">
                      <input type="checkbox" id="size-s"/>
                      <label for="size-s">S</label>
                      <input type="checkbox" id="size-m"/>
                      <label for="size-m">M</label>
                      <input type="checkbox" id="size-xl"/>
                      <label for="size-xl">Xl</label>
                      <input type="checkbox" id="size-xxl"/>
                      <label for="size-xxl">XXL</label>
                    </div>
                    <h5 class="mt-3">Colors :</h5>
                    <div class="colors">
                      <input type="checkbox" id="color-dark"/>
                      <label for="color-dark"> <i class="fa-solid fa-circle text-dark"></i></label>
                      <input type="checkbox" id="color-yellow"/>
                      <label for="color-yellow"> <i class="fa-solid fa-circle text-warning"></i></label>
                      <input type="checkbox" id="color-white"/>
                      <label for="color-white"> <i class="fa-solid fa-circle text-white"></i></label>
                      <input type="checkbox" id="color-red"/>
                      <label for="color-red"> <i class="fa-solid fa-circle text-danger"></i></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-9">
              <div class="product-fields">
                <div class="heading">
                  <h4>Add Product Photo</h4>
                </div>
                <div class="content">
                  <div class="inner">
                    <input type="file"/><br />
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    <h3 class="mt-4">Drop your images here, or <span>click to browse</span></h3>
                    <span>1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Add;
