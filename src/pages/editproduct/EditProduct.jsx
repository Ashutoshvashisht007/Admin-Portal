import React from 'react'
import "./editproduct.css"
import { Chart } from '../../Components/chart/Chart'
import { productData, ProductLists } from '../../dummyData'
import picture from "../../../assets/pic/Users.jpg"
import { Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const EditProduct = () => {
    return (
        <div className='editProduct'>
            <div className="editProductHeader">
                <h2>Product</h2>
                <Link to="/newProduct" style={{ textDecoration: "none", color: "inherit" }}>
                    <button className="editProductButton">Create</button>
                </Link>
            </div>
            <div className="editProductContainer">
                <div className="editProductleftContainer">
                    <Chart data={productData} title="Product Analytics" dataKey="Active Users" />
                </div>
                <div className="editProductrightContainer">
                    <div className="productInfor">
                        <img className='editProductImg' src={picture} alt="Picture" />
                        <span className="editProductTitle">iPhone</span>
                    </div>
                    <div className="productInfoBottom">
                        <span className="produtInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoBottom">
                        <span className="produtInfoKey">sales:</span>
                        <span className="productInfoValue">12300</span>
                    </div>
                    <div className="productInfoBottom">
                        <span className="produtInfoKey">active:</span>
                        <span className="productInfoValue">Yes</span>
                    </div>
                    <div className="productInfoBottom">
                        <span className="produtInfoKey">In stock:</span>
                        <span className="productInfoValue">No</span>
                    </div>
                </div>
            </div>
            <div className="editPorductBottomContainer">
                <form className="BottomForm">
                    <div className="BottomFormLeft">
                        <label>Product Name</label>
                        <input type="text" className="BottomFormInput" placeholder='iPhone' />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="BottomFormRight">
                        <div className="BottomDetailes">
                            <img src={picture} alt="picture" className="BottomDetailsIMG" />
                            <label htmlFor="file">
                                <Publish style={{ marginLeft: "15px", cursor: "pointer" }} />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>

                        <button className="BottomFormButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
