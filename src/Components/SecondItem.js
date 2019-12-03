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
                    <div className="container">
                        <div className="row"> 
                            <div className="col-md-3">
                                <img alt = "secondProduct" src= {this.state.secondApiData.master.images[0]["product_url"]} />
                            </div>
                            <div className="col-md-5">
                                <h3> {this.state.secondApiData.name} </h3>
                                <p>{this.state.secondApiData.description}</p>
                            </div>
                            <div className="col-md-1">
                                <div className="vl"></div>    
                            </div>
                            <div className="col-md-3 priceAndButton">
                                <b>Price: {this.state.secondApiData.price}$</b>
                                <input type = "number" name="quantity" min="1" max="5" onChange={updateItem}></input>    
                                <button className="btn btn-primary btnStyle" onClick={btnCart}>Add to Cart</button>   
                                <br />
                            </div>    
                        </div>
                    </div>    
                </div>
                )}
                <hr/>
            </div>
        )
    }
}
