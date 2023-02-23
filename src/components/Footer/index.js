import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="footer-left__icon">
                    <img src="./image/clock.png" alt="" />
                </div>
                <div className="footer-left__text">
                    <p>Đặt online <span>giao hàng tận nhà ĐÚNG GIỜ</span></p>
                    <p>Nế trễ tặng PMH 50.000đ</p>
                </div>
            </div>
            <div className="footer-center">
                <div className="footer-center__text">
                    <p>Bạn muốn chào hàng vào BHX? hãy để lại email, </p>
                    <p>chúng tôi sẽ liên hệ với bạn</p>
                </div>
                <div className="footer-center__form">
                    <input type="text" placeholder='abc@email.com'/>
                    <button className="button primary">Gửi</button>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-right__text">
                    <p>Liên hệ với tôi</p>
                </div>
                <ul className="footer-right__icon-list">

                    <li className="footer-right__icon-item">
                        <a href="#">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </li>

                    <li className="footer-right__icon-item">
                        <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>

                    <li className="footer-right__icon-item">
                        <a href="#">
                        <i className="fa-brands fa-github"></i>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}