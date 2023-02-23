import ItemCard from '../ItemCard'
import './GroupSale.css'

export default function GroupSale() {
    return (
        <div className="group-sale mg-10">
            <div className="group-sale__header">
                <h3 className="group-sale__header-text">sản phẩm khuyến mãi</h3>
            </div>
            <div className="group-sale__body">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    )
}