import React, {Component} from 'react';
import axios  from 'axios';
import {storeProducts} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        cart: []
    }
    // lifecycle method called after constructor
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let prds = [];
        // storeProducts.forEach(p => {
        //     prds.push({...p});
        // });
        // this.setState({
        //     products:prds
        // })
        axios.get("http://localhost:1234/products")
        .then(response => {
            prds = response.data;
            this.setState({
                products: prds
            })
        });
    }
    checkout = () => {
        axios.post("http://localhost:1234/orders", this.cart).then(res =>{
            console.log("order placed!!")
        });
    }

    getItem =(id) => {
        let prd = this.state.products.filter(p => p.id === id) [0];
        return prd;
    }

    addToCart = (id) => {
        let prd = this.getItem(id);
        prd.inCart = true;
        prd.count = 1;
        prd.total = prd.price;

        let cartCopy = this.state.cart;
        cartCopy.push(prd);
        this.setState({
            cart:cartCopy
        }); 
    }

    increment = (id) => {
        let prd = this.getItem(id);
        prd.count++;
        prd.total = prd.price * prd.count;
    
        this.setState({
            cart: this.state.cart // to take care or re-render
        });
    }

    render(){
        return <ProductContext.Provider value={{...this.state, 
            addToCart: this.addToCart,
            increment: this.increment
            }}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductContext, ProductConsumer};

