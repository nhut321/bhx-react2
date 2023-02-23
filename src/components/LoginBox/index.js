import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'
import './LoginBox.css'

function LoginBox() {
    const mainContext = useContext(MainContext)
    return (
        <>
            {
                mainContext.loginBox
                ?
                    <>
                    <div className="login-box">
                        <div className="login-box__left">
                            <h3>Đăng nhập bằng email</h3>
                            <form className="login-box__left-form">
                                <input type="text" placeholder='abc@email.com'/>
                                <input type="password" />
                                <button className="button primary width-100">Login</button>
                            </form>
                            <p style={{
                                color: 'var(--primary-color)',
                                cursor: 'pointer'
                            }}>Quên mật khẩu?</p>
                            <p className="create-account">
                                Chưa có tài khoản? 
                                <span style={{
                                    color: 'var(--primary-color)', 
                                    cursor: 'pointer', 
                                    marginLeft: '5px'
                                }}>Tạo tài khoản</span> 
                            </p>
                        </div>
                        <div className="login-box__right">
                            <div className="login-box__right-image">
                                <img src="./image/login.png" alt="" /> 
                            </div>
                            <div className="login-box__right-text">
                                <h3>Mua sắm tại BHX</h3>
                                <p>Siêu ưu đãi mỗi ngày</p>
                            </div>
                        </div>
                        <div className="closeBtn" onClick={mainContext.CloseLoginBox}>
                            <i class="fa-sharp fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="mask" onClick={mainContext.CloseLoginBox}></div>
                    </>
                :
                <></>
            }
        </>
    )
}

export default LoginBox