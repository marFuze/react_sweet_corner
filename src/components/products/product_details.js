import React from 'react';
import { connect } from  'react-redux';
import { clearProductDetails, getProductDetails } from '../../actions';
import Money from '../general/money'

class ProductDetails extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            quantity: 1
        };

        this.incrementQuantity = this.incrementQuantity.bind(this);
        this.decrementQuantity = this.decrementQuantity.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);

    }

    incrementQuantity() {
        this.setState({
            quantity: this.state.quantity + 1
        });

    }

    decrementQuantity() {
        if (this.state.quantity > 0) {
        this.setState({
            quantity: this.state.quantity - 1 
        });
    }
    }

    handleAddToCart() {
        const { id } = this.props.details;
    const { quantity } = this.state;

    console.log(`Add ${quantity} items to cart, with product ID: ${id}`);

    }
    
    componentDidMount() {
        //console.log('Product Details Component Mounted')
        //console.log('id',this.props.match.params.product_id);
        this.props.getProductDetails(this.props.match.params.product_id);
    }

    componentWillUnmount(){
        console.log('ProductDetails component about to unmount');
        this.props.clearProductDetails();
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
            <div className="product-quantity right mb-3">
    <h2 className="left">Quantity</h2>
    <div className="quantity-controls">
        <button onClick={this.decrementQuantity} className="btn btn-quantity">-</button>
        <span className="quantity">{this.state.quantity}</span>
        <button onClick={this.incrementQuantity} className="btn btn-quantity">+</button>
    </div>

    <button onClick={this.handleAddToCart} className="btn">Add To Cart</button>
</div>
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
getProductDetails: getProductDetails,
clearProductDetails: clearProductDetails
})(ProductDetails);