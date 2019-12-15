import React from 'react';
import { connect } from 'react-redux';
import { getGuestOrderDetails } from '../../actions';
import { queryToObject } from '../../helpers';


class GuestOrderDetails extends React.Component {

    componentDidMount(){
       
        const orderId = this.props.match.params.order_id;
        const { match, location } = this.props;

        const query = queryToObject(location.search);

        const email = query.email;

        this.props.getGuestOrderDetails(orderId,email);

        
    }

    render () {

        console.log('redux state orders details:', this.props);
        return (
            <div>
                <h1 className="center">Guest Order Details</h1>
            </div>
        )
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