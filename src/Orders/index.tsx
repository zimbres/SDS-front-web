import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import StepsHeader from '../StepsHeader';
import ProductsList from '../ProductsList';

function Orders() {
    return (
        <div className='orders-container'>
            <StepsHeader/>
            <ProductsList/>
        </div>
    )
}

export default Orders;