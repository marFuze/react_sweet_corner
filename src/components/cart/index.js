import React from 'react';
import { connect } from 'react-redux';
import { getActiveCart } from '../../actions';
import './cart.scss';

class Cart extends React.Component {
    

    componentDidMount(){
        this.props.getActiveCart();
    }

    render() {

        //console.log('Cart Items:', this.props.cartItems);

        return (
            <div>
            <h1 className="center">Cart</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log('cartItems state', state);
    return {
        cartItems: state.cart.items
    }
}

export default connect(mapStateToProps,{
    getActiveCart: getActiveCart
})(Cart);