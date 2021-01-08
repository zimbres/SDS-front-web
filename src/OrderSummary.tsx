import { formatPrice } from "./Orders/helpers";

type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}

function OrderSummary({ amount, totalPrice, onSubmit }: Props) {
    return (
        <div className='order-summary-container'>
            <div className='order-summary-content'>
                <div>
                    <span className='amount-selected-container'>
                        <strong className='amount-selected'>{amount}</strong>
                    Pedidos Selecionados
                    </span>
                    <span className='order-summary-total'>
                        <strong className='amount-selected'>{formatPrice(totalPrice)}</strong>
                    Valor Total
                </span>
                </div>
                <button className='order-summary-make-order' onClick={onSubmit}>Fazer Pedido</button>
            </div>
        </div>

    )
}

export default OrderSummary;