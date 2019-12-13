import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartTotals } from '../../actions';

class CartWidget extends React.Component {

    componentDidMount(){
        this.props.getCartTotals();
    }

    render () {
        return(
        <li className="cart-widget">
        <Link to="/cart">
            <i className="material-icons">shopping_cart</i>
            <span className="cart-item-count">20</span>
        </Link>
    </li>
        ) 
    }
}

function mapStateToProps(state){
    //console.log('cartwidget state:',state);
    return {
        
    }
}

export default connect(mapStateToProps, {
    getCartTotals: getCartTotals
})(CartWidget);