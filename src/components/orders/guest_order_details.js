import React from 'react';
import { connect } from 'react-redux';
import { getGuestOrderDetails } from '../../actions';
import { queryToObject } from '../../helpers';
import GuestOrderDetailsRow from './guest_order_details_row';


class GuestOrderDetails extends React.Component {

    componentDidMount(){
       
        const orderId = this.props.match.params.order_id;
        const { match, location } = this.props;

        const query = queryToObject(location.search);

        const email = query.email;

        this.props.getGuestOrderDetails(orderId,email);

    }

    render () {

        const { items } = this.props.details;

        if(!items){
            return(
                <div className="product-details">
                <h1>Loading Checkout Items</h1>
                </div>
                )
        } else {

        const rowElements = items.map((element) => {
            return <GuestOrderDetailsRow key={element.id} {...element} />
        });
  
        return (
            <div>
                <h1 className="center">Guest Order Details</h1>
                <table className='cart-table'>
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
}

function mapStateToProps(state){
    return {
        details: state.orders.details
    }
}

export default connect(mapStateToProps, {
    getGuestOrderDetails: getGuestOrderDetails
})(GuestOrderDetails);