import { useState } from 'react'
import './AdminAddProduct.css'
import axios from 'axios'

export default function AdminAddProduct() {
    const [newProduct, setNewProduct] = useState({
        name: '',
        company: '',
        groupName: '',
        date: '',
        pos: '',
        start: '',
        price: '',
        code: '',
        image: '',
        description: '',
        sale: ''
    })

    function onChangeInput(e) {
        setNewProduct(p => {
            return {
                ...p,
                [e.target.name]: e.target.value
            }
        })
        console.log(e.target.value)
    }

    async function fnAddProduct(e) {
        e.preventDefault()
        await axios.post('http://localhost:8080/products/create-product', {
            data: newProduct
        })
        setNewProduct(v => {
            return {
                ...v,
                name: '',
                company: '',
                groupName: '',
                date: '',
                pos: '',
                start: '',
                price: '',
                code: '',
                image: '',
                description: '',
                sale: ''
            }
        })
    }


    return (
        <div className="add-product">
            <h1>Thêm sản phẩm</h1>
            <form className="add-product__form" onSubmit={fnAddProduct}>
                <div className="add-product__list">
                    <div className="add-product__item">
                        <label>Tên sản phẩm</label>
                        <input value={newProduct.name} name='name' type="text" onChange={e => onChangeInput(e)} />
                    </div>
                    <div className="add-product__item">
                        <label>Công ty</label>
                        <input value={newProduct.company} name='company' type="text" onChange={e => onChangeInput(e)} />
                    </div>
                    <div className="add-product__item">
                        <label>Tên nhóm hàng</label>
                        <input value={newProduct.groupName} name='groupName' type="text" onChange={e => onChangeInput(e)} />
                    </div>
                    <div className="add-product__item">
                        <label>Hạn sử dụng</label>
                        <input value={newProduct.date} name='date' type="date" onChange={e => onChangeInput(e)} />
                    </div>
                    <div className="add-product__item">
                        <label>Tồn kho</label>
                        <input value={newProduct.pos} name='pos' type="number" onChange={e => onChangeInput(e)} />
                    </div>
                    <div className="add-product__item">
                        <label>Giá</label>
                        <input value={newProduct.price} name='price' type="number" onChange={e => onChangeInput(e)} />
                    </div>
                    <div className="add-product__item">
                        <label>barcode</label>
                        <input value={newProduct.code} name='code' type="text" onChange={e => onChangeInput(e)} />
                    </div>
                    <div className="add-product__item">
                        <label>Hình ảnh</label>
                        <input value={newProduct.image} name='image' type="text" onChange={e => onChangeInput(e)} />
                    </div>
                    <div className="add-product__item">
                        <label>Sale</label>
                        <input value={newProduct.sale} name='sale' type="radio" onChange={e => onChangeInput(e)} />
                    </div>
                    <div className="add-product__item">
                        <label>Thông tin sản phẩm</label>
                        <textarea value={newProduct.description} name='description' type="text" onChange={e => onChangeInput(e)} />
                    </div>
                </div>
                <button className="button">Thêm</button>
            </form>
        </div>

    )
}