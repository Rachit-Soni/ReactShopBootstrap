import React, { Component } from 'react'

export default class ThirdItem extends Component {
    
    state = {
        loading : true,
        thirdApiData : [] 
    };
    
    async componentDidMount(){
        const url = 'https://api.myjson.com/bins/1hj9cq';
        const response = await fetch (url);
        const data = await response.json();
        this.setState({thirdApiData: data.products[2], loading: false})
       // console.log(this.state.thirdApiData);
    }


    render() {

        function btnCart (event){
          //  console.log('Button Works!')
            
    };
    
        let qty=0;
        function updateItem(event) {
            ++qty;
            //console.log(qty)
        }

        return (
            <div>
            {   this.state.loading || !this.state.thirdApiData? (<div>Loading...</div>): (
                    <div>
                        <div className="container">
                            <div className="row">
                            <div className="col-md-3"> 
                                <img alt = "secondProduct" src= {this.state.thirdApiData.master.images[0]["product_url"]} />
                            </div>
                            <div className="col-md-5"> 
                                <h3> {this.state.thirdApiData.name} </h3>
                                <p>{this.state.thirdApiData.description}</p>
                            </div>
                            <div className="col-md-1">
                                <div className = "vl"> </div>
                            </div>
                            <div className="col-md-3">
                            <p>Price: {this.state.thirdApiData.price}$</p>
                                <input type = "number" name="quantity" min="1" max="5" onChange={updateItem}></input>    
                                <button className="cartButton" onClick={btnCart}>Add to Cart</button>   
                            
                            </div>   
                                <br />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
