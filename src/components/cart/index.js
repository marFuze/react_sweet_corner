import React from 'react';
import { connect } from 'react-redux';
import { getActiveCart } from '../../actions';
import './cart.scss';
import CartRow from './cart-row';

class Cart extends React.Component {
    

    componentDidMount(){
        this.props.getActiveCart();
    }

    render() {

        console.log('Cart Items:', this.props);
        
         const { cartItems } = this.props;

         console.log ('cartitems destructured', cartItems)
    
        const rowElements = cartItems.map((element, index) => {
     
        return <CartRow key={element.itemId} index={index} {...element} />
    });
        return (
            <div>
             <table className=''>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Each</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {rowElements}
            </tbody>
        </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('cartItems state', state);
    return {
        cartItems: state.cart.items
    }
}

export default connect(mapStateToProps,{
    getActiveCart: getActiveCart
})(Cart);