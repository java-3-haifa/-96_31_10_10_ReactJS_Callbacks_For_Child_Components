import React,{Component} from 'react';
import StateLessCounter from './StateLessCounter.js';

export default class extends Component{
    state = {
        product:{
            name:'Super product',
            price: 50,
            count:2
        }
    };
    addCount = ()=>{
        let product = {...this.state.product, count:this.state.product.count + 1};
        this.setState({
            product
        })
    };
    rmCount = ()=>{
        let product = {...this.state.product, count:this.state.product.count - 1};
        this.setState({
            product
        })
    };
    render(){
       return  (
            <div>
                <h2>Stateless demo</h2>
                <p>{this.state.product.name} - {this.state.product.price}</p>
                <StateLessCounter curr={this.state.product.count}
                onInc={this.addCount} onDec={this.rmCount}/>
                <h3>Total: {this.state.product.count * this.state.product.price}</h3>
            </div>
        )
    }
}
