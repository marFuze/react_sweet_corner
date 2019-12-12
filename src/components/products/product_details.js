import React from 'react';

class ProductDetails extends React.Component {
    
    componentDidMount() {
        //console.log('Product Details Component Mounted')
        //console.log('id',this.props.match.params.product_id);
    }
    
    render() {
        return(
            <div className="product-details">
            <h1>Product Details</h1>
            </div>
        )
    }
}

export default ProductDetails;