import React from 'react';
import { connect } from 'react-redux';
import './products.scss';
import { getAllProducts } from '../../actions';
import ProductItem from './product_item';

class Products extends React.Component {

    componentDidMount() {
        this.props.getAllProducts();
    }

    render () {
        const { products } = this.props;
        
        const rowElements = products.map((product,index) => {
            return <ProductItem key={product.id} {...product} />
        });

        return (
            <div className='products-container'><h1>Our Products</h1>
            <div className="products">
            
            {rowElements}
            </div></div>
            
        
        )
    }
}

function mapStateToProps(state){
    
    return {
        products: state.products.list
    }
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
})(Products);
