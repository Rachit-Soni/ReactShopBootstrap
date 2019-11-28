import React, { Component } from 'react'

export default class SecondItem extends Component {
    
    state = {
        loading : true,
        secondApiData : [],
    };
    
    async componentDidMount(){
        const url = 'https://api.myjson.com/bins/1hj9cq';
        const response = await fetch (url);
        const data = await response.json();
        this.setState({secondApiData: data.products[1], loading: false})
       // console.log(this.state.secondApiData);
    }


    render() {

        function btnCart (event){
        //    console.log('Button Works!')
            
    };
    
        let qty=0;
        function updateItem(event) {
            ++qty;
      //      console.log(qty)
        }

        return (
            <div>
            {   this.state.loading || !this.state.secondApiData? (<div>Loading...</div>): (
                    <div>
                        <h3> {this.state.secondApiData.name} </h3>
                        <p>{this.state.secondApiData.description}</p>
                        <img alt = "secondProduct" src= {this.state.secondApiData.master.images[0]["product_url"]} />
                        <p>Price: {this.state.secondApiData.price}$</p>
                        <input type = "number" name="quantity" min="1" max="5" onChange={updateItem}></input>    
                        <button className="cartButton" onClick={btnCart}>Add to Cart</button>   
                        <br />
                    </div>
                )}
                <hr/>
            </div>
        )
    }
}
