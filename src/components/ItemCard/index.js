import { Link } from 'react-router-dom'
import axios from 'axios'
import './ItemCard.css'

export default function ItemCard({info}) {

    return (
        <div className="item-card">
            {/* <Link to='/detail/'> */}
                <Link to={'/detail/' + info?._id}>
                    <div className="item-card__image mt-15">
                        <img src={info ? info.image : "./image/tools/160.png"} alt="" />
                    </div>
                    <div className="item-card__name">
                        {info ? info.name : 'Lorem, ipsum dolor sit amet consectetur adipisicing.'}
                    </div>

                </Link>
                <div className="item-card__price">
                    {info ? info.price : '999.000'}<sup>đ</sup>
                </div>
                <div className="item-card__button">
                    <button className='button'>Chọn mua </button>
                </div>
            {/* </Link> */}
        </div>
    )
}