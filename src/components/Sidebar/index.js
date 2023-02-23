import './Sidebar.css'
import SidebarItem from './SidebarItem'

export default function Sidebar() {
    const sidebarList = [
        {
            parent: 'Thịt, cá, trứng, hải sản',
            child: [
                {
                    name: 'Thịt các loại',
                    link: 'thit'
                },
                {
                    name: 'Cá, hải sản',
                    link: 'ca-hai-san'
                }, 
                {
                    name: 'Trứng gà, vịt cút',
                    link: 'trung'
                },
            ]
        },
        {
            parent: 'Rau, củ, trái cây',
            child: [
                {
                    name: 'Rau lá',
                    link: 'rau'
                },
                {
                    name: 'Củ, quả',
                    link: 'cu-qua'
                }, 
                {
                    name: 'Trái cây',
                    link: 'trai-cay'
                },
            ]
        },
        {
            parent: 'Dầu ăn, nước chấm, gia vị',
            child: [
                {
                    name: 'Dầu ăn',
                    link: 'dau-an'
                },
                {
                    name: 'Đường',
                    link: 'duong'
                }, 
                {
                    name: 'Hạt nêm, bột ngọt, bột canh',
                    link: 'hat-nem'
                },
                {
                    name: 'Muối',
                    link: 'muoi-an'
                },
                {
                    name: 'Nước mắm',
                    link: 'nuoc-mam'
                },
                {
                    name: 'Nước tương',
                    link: 'nuoc-tuong'
                },
                {
                    name: 'Tương ớt - đen, mayonnaise',
                    link: 'tuong-ot'
                },
                {
                    name: 'Dầu hào, giấm, bơ',
                    link: 'dau-bo'
                },
                {
                    name: 'Tiêu, sa tế, ớt bột',
                    link: 'tieu'
                },
                {
                    name: 'Nước chấm, mắm',
                    link: 'nuoc-cham'
                },
                {
                    name: 'Gia vị nêm sẵn',
                    link: 'gia-vi'
                },
                {
                    name: 'Bột nghệ, tỏi, hồi, quế',
                    link: 'bot-nghe-toi'
                },
            ]
        },
        {
            parent: 'kem, thực phẩm đông mát',
            child: [
                {
                    name: 'Kêm cây, kem hộp',
                    link: 'kem-cay'
                },
                {
                    name: 'Bánh đông, bánh tươi',
                    link: 'banh-dong'
                }, 
                {
                    name: 'Xúc xích, lạp xưởng, chả lụa',
                    link: 'xuc-xich'
                },
                {
                    name: 'Chả giò, cá - bò viên',
                    link: 'cha-gio-vien'
                },
                {
                    name: 'Há cảo, xủi cảo',
                    link: 'ha-cao'
                },
                {
                    name: 'Thịt, cá, rau đông lạnh',
                    link: 'thit-ca-rau-dong'
                },
                {
                    name: 'Thực phẩm làm sẵn',
                    link: 'thuc-pham-lam-san'
                },
                {
                    name: 'Sữa chua, phô mai',
                    link: 'sua-chua-pho-mai'
                },
                {
                    name: 'Bánh flan, đậu hũ, kim chi, ...',
                    link: 'banh-flan-dau-hu'
                }
            ]
        },
        
        
    ]
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-header__hambur">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="sidebar-header__text">Danh mục sản phẩm</div>
            </div>
            <ul className="sidebar-list">
                {
                    sidebarList.map((v,i) => {
                        return (
                            <SidebarItem key={i} parent={v.parent} child={v.child}/>
                        )
                    })
                }
                {/* <SidebarItem />
                <SidebarItem />
                <SidebarItem />
                <SidebarItem />
                <SidebarItem />
                <SidebarItem />
                <SidebarItem />
                <SidebarItem />
                <SidebarItem />
                <SidebarItem />
                <SidebarItem />
                <SidebarItem />
                <SidebarItem /> */}
            </ul>
        </div>
    )
}