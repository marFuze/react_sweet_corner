import React from 'react';
import { connect } from 'react-redux';

class CartRow extends React.Component {

    render () {
        const { name, each, quantity, total } = this.props;

        console.log("cart row this.props:", this.props);

        return (
            <tr className="">
                
                <td>{ name } </td>
                <td>{ each }</td>
                <td>{ quantity }</td>
                <td>{ total }</td>
            </tr>
        );
    }

}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps)(CartRow);