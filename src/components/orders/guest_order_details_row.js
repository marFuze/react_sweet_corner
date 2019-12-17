import React from 'react';
import { connect } from 'react-redux';

class GuestOrderDetailsRow extends React.Component {

    render () {
        const { product, each, quantity, total } = this.props;
    
        return (
            <tr className="">
                
                <td>{product.name}</td>
                <td>{each}</td>
                <td>{quantity}</td>
                <td>{total}</td>
            </tr>
        );
    }

}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps)(GuestOrderDetailsRow);