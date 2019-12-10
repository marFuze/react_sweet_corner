import React from 'react';
import { connect } from 'react-redux';
import './products.scss';
import { getAllProducts } from '../../actions';

class Products extends React.Component {

    componentDidMount() {
        this.props.getAllProducts();
    }

    render () {
        const { products } = this.props;
        console.log('products', products);
        return (
        
                <div className="products">
                <h1>Our Products</h1>
                </div>
        
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
