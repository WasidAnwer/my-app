import React, { useState } from "react";
import "../../css/product/list.css";
function ProductList() {
	const [isDisabled, setIsDisabled] = useState(true);
	return (
		<div className="markup-list">
			<div className="container">
				<div className="srch-form">
					<form action="/">
						{/* <input type="text" name="search" placeholder="Search Product" /> */}
						<div className="row serch">
							<div className="col-3">
								<div className="field">
									<input className="form-control" type="text" name="search" placeholder="Search Product" />
								</div>
							</div>
							<div className="col-3">
								<div className="field">
									<select name="Stock Status">
										<option value="">Stock Status</option>
										<option value="1">In Stock</option>
										<option value="2">Out Of Stock</option>
										<option value="3">On Demand</option>
										<option value="4">Temprory Unavailable</option>
									</select>
								</div>
							</div>
							<div className="col-3">
								<div className="field">
									<select name="category">
										<option value="">Select Category</option>
										<option value="1">Category 1</option>
										<option value="2">Category 2</option>
									</select>
								</div>
							</div>
							<div className="col-3">
								<div className="srch-btn">
									<button className="btn btn-primary" type="submit">Search</button>
								</div>
							</div>
						</div>
					</form>
				</div >
				<div className="listing  mt-4">
					<div className="border">
						<table cellpadding="0" cellspacing="0">
							<tbody>
								<tr>
									<th>
										<label><input type="checkbox" name="check" value="1" />
											ID  1
										</label>
									</th>
									<th>Image</th>
									<th>Product Name</th>
									<th>Category</th>
									<th>Price</th>
									<th>Stock</th>
									<th>Date</th>
									<th>Action</th>
								</tr>
								<tr>
									<td>
										<label><input type="checkbox" name="check" value="1" />
											1
										</label>
									</td>
									<td><img src="https://via.placeholder.com/150" alt="Product" /></td>
									<td>Product Name</td>
									<td>Category</td>
									<td>Price</td>
									<td>Stock</td>
									<td>Date</td>
									<td>
										<a href="/"><i title="View Product" class="fa fa-eye" style={{ color: "green" }}></i></a>
										<a href="/"><i title="Edit Product" class="fa-solid fa-pen-to-square" style={{ color: "orange" }}></i></a>
										<a href="/"><i title="Delete Product" class="fa-solid fa-trash" style={{ color: "red" }}></i></a>
									</td>
								</tr>
								<tr>
									<td>
										<label><input type="checkbox" name="check" value="1" />
											2
										</label>
									</td>
									<td><img src="https://via.placeholder.com/150" alt="Product" /></td>
									<td>Product Name</td>
									<td>Category</td>
									<td>Price</td>
									<td>Stock</td>
									<td>Date</td>
									<td>
										<a href="/"><i title="View Product" class="fa fa-eye" style={{ color: "green" }}></i></a>
										<a href="/"><i title="Edit Product" class="fa-solid fa-pen-to-square" style={{ color: "orange" }}></i></a>
										<a href="/"><i title="Delete Product" class="fa-solid fa-trash" style={{ color: "red" }}></i></a>
									</td>
								</tr>
								<tr>
									<td>
										<label><input type="checkbox" name="check" value="1" />
											3
										</label>
									</td>
									<td><img src="https://via.placeholder.com/150" alt="Product" /></td>
									<td>Product Name</td>
									<td>Category</td>
									<td>Price</td>
									<td>Stock</td>
									<td>Date</td>
									<td>
										<a href="/"><i title="View Product" class="fa fa-eye" style={{ color: "green" }}></i></a>
										<a href="/"><i title="Edit Product" class="fa-solid fa-pen-to-square" style={{ color: "orange" }}></i></a>
										<a href="/"><i title="Delete Product" class="fa-solid fa-trash" style={{ color: "red" }}></i></a>
									</td>
								</tr>
								<tr>
									<td>
										<label><input type="checkbox" name="check" value="1" />
											4
										</label>
									</td>
									<td><img src="https://via.placeholder.com/150" alt="Product" /></td>
									<td>Product Name</td>
									<td>Category</td>
									<td>Price</td>
									<td>Stock</td>
									<td>Date</td>
									<td>
										<a href="/"><i title="View Product" class="fa fa-eye" style={{ color: "green" }}></i></a>
										<a href="/"><i title="Edit Product" class="fa-solid fa-pen-to-square" style={{ color: "orange" }}></i></a>
										<a href="/"><i title="Delete Product" class="fa-solid fa-trash" style={{ color: "red" }}></i></a>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="link">
							<nav>
								<ul className="pagination">
									<li className="page-item"><a href="/">Prev</a></li>
									<li className="page-item"><a href="/">1</a></li>
									<li className="page-item"><a href="/">2</a></li>
									<li className="page-item"><a href="/">3</a></li>
									<li className="page-item"><a href="/">4</a></li>
									<li className="page-item"><a href="/">5</a></li>
									<li className="page-item"><a href="/">Next</a></li>
								</ul>
							</nav>
						</div>
						<div className="btns">
							<button className="btn btn-primary" type="button" onClick={() => setIsDisabled(!isDisabled)}><i class="fa-solid fa-envelope"></i> Email</button>
							<button className="btn btn-primary" type="button" onClick={() => setIsDisabled(!isDisabled)}><i class="fa-solid fa-file-export"></i> Export</button>
							<button className="btn btn-primary" type="button" onClick={() => setIsDisabled(!isDisabled)}><i class="fa-solid fa-file-export"></i> Export () All</button>
						</div>
					</div>
				</div>
			</div >
		</div>
	)
}
export default ProductList;