import react, { useEffect,useState } from 'react'
import GroupCategori from '../../components/GroupCategori'
import './ProductDetail.css'
import { baseUrl } from '../../config/baseUrl.js'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const [detail, setDetail] = useState({
                                    name: '',
                                    price: '',
                                    image: '',
                                    des: ''
                                })
    let { id } = useParams()
    useEffect(() => {
        async function fetchData() {
            await axios.get(baseUrl + '/products/get-product/' + id)
                .then(data => {
                    setDetail(v => {
                        return {
                            ...v,
                            name: data?.data[0]?.name,
                            price: data?.data[0]?.price,
                            image: data?.data[0]?.image,
                            des: data?.data[0]?.description
                        }
                    })
                })
        }
        fetchData()
    },[])

    console.log(detail)
    
    return (
        <div className="product-detail mg-10">
            <div className="product-detail__top">
                
                <div className="detail__top-left">
                    <div className="top-left__slider">
                        {/* <img src="/image/tools/slider-detail.png" alt="" /> */}
                        <img src={ detail.image != '' ? detail.image : "/image/tools/slider-detail.png" } alt="" />
                    </div>
                </div>
                
                <div className="detail__top-right">
                    <div className="top-right__text">
                        <p>{detail.name != '' ? detail.name : "name ne"}</p>
                    </div>
                    <div className="top-right__date">Còn 11 tháng</div>
                    <div className="top-right__price">{detail.price != '' ? detail.price : 999.999}<sup>đ</sup></div>
                    <div className="top-right__button">
                        <button className='button primary'>Chọn mua</button>
                    </div>
                </div>

            </div>
            <div className="product-detail__info">
                <div className="detail__info-left">
                    <div className="info-left__header">
                        <p>Thông tin sản phẩm</p>
                    </div>
                    <div className="info-left__text">
                        {detail.des != '' ? detail.des : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, praesentium?' }
                    </div>
                    <div className="info-left__rating">
                        <div className="rating-header">
                            <p>Đánh giá sản phẩm</p>
                        </div>
                        <div className="rating-info">
                            <div className="rating-info__left">
                                <div className="rating-info__left-number">5.0</div>
                                <div className="rating-info__left-icon">
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="rating-info__left-count">19 đánh giá</div>
                            </div>
                            <div className="rating-info__center">
                                <ul className='rating-info__center-list'>
                                    <li className='rating-info__center-item'>
                                        <span>
                                        5★
                                        </span>
                                        <div className="rating-range">
                                            <div className="rating-range__item" style={{
                                                backgroundColor: 'var(--secondary-color)',
                                                width: '50%',
                                                height: '5px'
                                            }}></div>
                                        </div>
                                        <div className="rating-count">
                                            <span>10 đánh giá</span>
                                        </div>
                                    </li>
                                    <li className='rating-info__center-item'>
                                        <span>
                                        4★
                                        </span>
                                        <div className="rating-range">
                                            <div className="rating-range__item"></div>
                                        </div>
                                        <div className="rating-count">
                                            <span>10 đánh giá</span>
                                        </div>
                                    </li>
                                    <li className='rating-info__center-item'>
                                        <span>
                                        3★
                                        </span>
                                        <div className="rating-range">
                                            <div className="rating-range__item"></div>
                                        </div>
                                        <div className="rating-count">
                                            <span>10 đánh giá</span>
                                        </div>
                                    </li>
                                    <li className='rating-info__center-item'>
                                        <span>
                                        2★
                                        </span>
                                        <div className="rating-range">
                                            <div className="rating-range__item"></div>
                                        </div>
                                        <div className="rating-count">
                                            <span>10 đánh giá</span>
                                        </div>
                                    </li>
                                    <li className='rating-info__center-item'>
                                        <span>
                                        1★
                                        </span>
                                        <div className="rating-range">
                                            <div className="rating-range__item"></div>
                                        </div>
                                        <div className="rating-count">
                                            <span>10 đánh giá</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="rating-info__right">
                                <span>Gửi đánh giá của bạn</span>
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rating-box">
                            <form action="" className="form-rating">
                                <textarea 
                                    name="" 
                                    id="" 
                                    cols="20" 
                                    rows="7"
                                    placeholder='Mời bạn đánh giá về sản phẩm...'
                                ></textarea>
                                <input placeholder='Họ tên (Bắt buộc)'></input>
                                <button className="button primary width-100">Đánh giá</button>
                            </form>
                        </div>
                        <ul className="rating-list">

                            <li className="rating-item">
                                <div className="rating-item__top">
                                    <span className='rating-item__top-name'>User</span>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="rating-item__comment">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque.</p>
                                </div>
                            </li>

                            <li className="rating-item">
                                <div className="rating-item__top">
                                    <span className='rating-item__top-name'>User</span>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="rating-item__comment">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque.</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="detail__info-right">
                    <GroupCategori />
                </div>
            </div>
        </div>
    )
}