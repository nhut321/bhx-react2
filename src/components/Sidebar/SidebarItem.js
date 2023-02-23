import { useState } from 'react'
import { baseUrl } from '../../config/baseUrl'

export default function SidebarItem({parent, child}) {
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState({
        height: '40px'
    })
    const openSidebarItem = (e) => {
        setIsOpen(!isOpen)
        isOpen == false
        ?
        setOpen({
            height: 'inherit'
        })
        :
        setOpen({
            height: '40px'
        })
    }
    return (
        <li className="sidebar-item" style={
            open
        } onClick={openSidebarItem}>
            <div className="sidebar-item__parent">
                <p className='sidebar-item__text'>{parent}</p>
                {
                    isOpen 
                    ?
                    <i className="sidebar-item__icon fa-solid fa-chevron-up"></i>
                    :
                    <i className="sidebar-item__icon fa-solid fa-chevron-down"></i>
                }
            </div>
            <ul className="sidebar-item__child">
                {
                    child.map((v,i) => {
                        return (
                            <li key={i} className="sidebar-item__child-item">
                                <a href={'/' + v.link}>
                                    {v.name}
                                </a>
                            </li>
                        )
                    })
                }
                {/* <li className="sidebar-item__child-item">
                    Thịt các loại
                </li>
                <li className="sidebar-item__child-item">
                    Thịt các loại
                </li> */}
            </ul>
        </li>
    )
}