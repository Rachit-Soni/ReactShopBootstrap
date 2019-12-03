

import React, { Component } from 'react'

export default class FirstItem extends Component {
    
    state = {
                loading: true,
                firstApiData: [],        
                cartState: {
                                    name : '',
                                    price: '',
                                    quantity: 0
                                }
            };

    //componentDidMount     
    async componentDidMount() {
        const url = 'https://api.myjson.com/bins/1hj9cq';
        const response = await fetch (url);
        const data = await response.json();
        this.setState({firstApiData: data.products[0], loading: false})
        //console.log(this.state.firstApiData);
    }


    //Functions
 qty = 1;
    updateItem = (event) =>{
        ++this.qty;
        console.log(this.qty);
    }


   btnCart = (event) => {
       console.log('Button Works!')
       console.log(this.cartState);
       this.setState({cartState: 
                        {name:this.state.firstApiData.name,
                        quantity: this.qty,
                        price: this.state.firstApiData.price * this.qty}
                    })
       console.log(this.cartState);             
   }
    
/*     function btnCart (event){
        console.log('Button Works!')
       
        console.log(this.state.firstApiData);


};

    let qty=0;
    function updateItem(event) {
        ++qty;
        console.log(qty)
    }

 */

    render() {

      
        

        return (
            <div>
                {   this.state.loading || !this.state.firstApiData? (<div>Loading...</div>): (
                    <div>
                        <div className="container">
                            <h1>Invisalign Accessories</h1>
                            <br / ><br /> 
                            <div className ="row">
                                <div className="col-md-3">
                                <img alt = "FirstProduct" src= {this.state.firstApiData.master.images[1]["product_url"]} />
                                </div>
                                <div className="col-md-5">
                                <h3> {this.state.firstApiData.name} </h3>
                                <p>{this.state.firstApiData.description}</p>
                                </div>
                                <div className="col-md-1">
                                <div className="vl"></div>    
                                </div>
                                <div className="col-md-3 priceAndButton">
                                <b className= "priceStyle">Price: {this.state.firstApiData.price}$</b> 
                                <input type = "number" name="quantity" min="1" max="5" onChange={this.updateItem}></input>
                                    
                                <button className="btn btn-primary btnStyle" onClick={this.btnCart}>Add to Cart</button>   
                                </div>

                            <br />
                            </div>
                        </div>
                        <hr />
                    </div>
                )}
            </div>
        )
    }
}
