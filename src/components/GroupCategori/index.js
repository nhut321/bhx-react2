import './GroupCategori.css'

export default function GroupCategori() {
    return (
        <div className="group-categori">
            <div className="group-categori__text">
                <p>Nhóm hàng thường mua</p>
            </div>
            <ul className="group-categori__list">

                <li className="group-categori__item">
                    <a href="#" className="item-link">
                        <img src="/image/thit-heo.png" alt="" />
                        <span>Thịt heo</span>
                    </a>
                </li>

                <li className="group-categori__item">
                    <a href="#" className="item-link">
                        <img src="/image/kem.png" alt="" />
                        <span>Kem cây, kem hộp</span>
                    </a>
                </li>

                <li className="group-categori__item">
                    <a href="#" className="item-link">
                        <img src="/image/nuoc-giat.png" alt="" />
                        <span>Nước giặt</span>
                    </a>
                </li>


                <li className="group-categori__item">
                    <a href="#" className="item-link">
                        <img src="/image/mi-an-lien.png" alt="" />
                        <span>Mì ăn liền</span>
                    </a>
                </li>

                <li className="group-categori__item">
                    <a href="#" className="item-link">
                        <img src="/image/giay-ve-sinh.png" alt="" />
                        <span>Giấy vệ sinh</span>
                    </a>
                </li>

                <li className="group-categori__item">
                    <a href="#" className="item-link">
                        <img src="/image/nuoc-mam.png" alt="" />
                        <span>Nước mắm</span>
                    </a>
                </li>

                <li className="group-categori__item">
                    <a href="#" className="item-link">
                        <img src="/image/rau-cu.png" alt="" />
                        <span>Rau, củ, trái cây</span>
                    </a>
                </li>

                <li className="group-categori__item">
                    <a href="#" className="item-link">
                        <img src="/image/cha-gio.png" alt="" />
                        <span>Chả giò, chả ram</span>
                    </a>
                </li>

                <li className="group-categori__item">
                    <a href="#" className="item-link">
                        <img src="/image/sua.png" alt="" />
                        <span>Sữa</span>
                    </a>
                </li>

                <li className="group-categori__item">
                    <a href="#" className="item-link">
                        <img src="/image/nuoc-ngot.png" alt="" />
                        <span>Nước ngọt</span>
                    </a>
                </li>

            </ul>
        </div>
    )
}