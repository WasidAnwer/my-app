import { useState } from "react";
import "../../css/product/add.css";

function Add() {
  const [selectedFiles, setSelectedFiles] = useState(Array(4).fill(null));
  const [previewUrls, setPreviewUrls] = useState(Array(4).fill(""));

  const handleFileChange = (event, index) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const updatedFiles = [...selectedFiles];
      updatedFiles[index] = file;
      setSelectedFiles(updatedFiles);

      // Generate preview URL if file is an image
      if (file.type.startsWith("image/")) {
        const preview = URL.createObjectURL(file);
        const updatedPreviews = [...previewUrls];
        updatedPreviews[index] = preview;
        setPreviewUrls(updatedPreviews);
      }
    }
  };

  return (
    <>
      <div className="markup-add">
        <div className="container m-0">
          <div className="form-add">
            <h2>Add Product</h2>
            <div className="fields">
              <form>
                <div className="row">
                  {/* Image Upload Section */}
                  <div className="col-6">
                    <div className="row">
                      {[0, 1, 2, 3].map((index) => (
                        <div className="col-md-6" key={index}>
                          <div className="image">
                            <input
                              type="file"
                              className="file-input"
                              onChange={(e) => handleFileChange(e, index)}
                            />
                            <div className="icon1">
                              {previewUrls[index] ? (
                                <img src={previewUrls[index]} alt="Uploaded" width="100" />
                              ) : (
                                <p className="subheading-3">Browse image</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Details Section */}
                  <div className="col-6">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="field">
                          <label>Product Name</label>
                          <input className="brand" type="text" name="product_name" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="field">
                          <label>Brand Name</label>
                          <input className="brand" type="text" name="brand_name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="field">
                          <label>Category</label>

                          <select name="category">
                            <option value="">Select Category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="field">
                          <label>Regular Price</label>
                          <input className="brand" type="text" name="regular_price" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="field">
                          <label>Sell Price</label>
                          <input className="brand" type="text" name="sell_price" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="field">
                          <label>Stock Status</label>
                          <select name="stock_status">
                            <option value="">Select Stock Status</option>
                            <option value="1">In Stock</option>
                            <option value="2">Out of Stock</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
