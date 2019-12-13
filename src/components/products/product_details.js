import React from 'react';
import { connect } from  'react-redux';
import { getProductDetails } from '../../actions';
import Money from '../general/money'

class ProductDetails extends React.Component {
    
    componentDidMount() {
        //console.log('Product Details Component Mounted')
        //console.log('id',this.props.match.params.product_id);
        this.props.getProductDetails(this.props.match.params.product_id);
    }
    
    render() {
        const { details } = this.props
        //console.log('props:', this.props);
        if (!details){ 
            return(
            <div className="product-details">
            <h1>Loading Product</h1>
            </div>
            )
        } else {
            return (
            <div className="product-details">

            <img src={details.image.url} alt=""/>
            <h1>{details.name}</h1>
            <p>{details.caption}</p>
            <h3>Description</h3>
            <p>{details.description}</p>
            <Money pennies={details.cost}/>
            </div>
            )
        }
        }
    }

function mapStateToProps(state){
    //console.log('product details state', state);
    return {
        details: state.products.details
    }
}

export default connect(mapStateToProps,{
getProductDetails: getProductDetails
})(ProductDetails);