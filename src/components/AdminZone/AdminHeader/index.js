
import './AdminHeader.css'

export default function AdminHeader() {
    return (
        <div className="admin-header">
            <div className="admin-header__left">
                <h2>Adminstrator</h2>
            </div>
            <div className="admin-header__center">
                <a href='/'>Go to the Web</a>
            </div>
            <div className="admin-header__right">
                <h3>Hello admin</h3>
            </div>
        </div>
    )
}