import React, { Component } from 'react'

export default class Accessories extends Component {

state = {

            loading: true,
            apiData0: [],
            apiData1: [],
            apiData2: [],
            cartState: []

        }


async componentDidMount()
{

    const url = 'https://api.myjson.com/bins/1hj9cq';
        const response = await fetch (url)
        const data = await response.json();
        console.log(data.products[0])
        
        this.setState(
                        {
                            apiData0: data.products[0],
                            apiData1: data.products[1],
                            apiData1: data.products[2],
                            loading: false

                        }
                     )
        console.log(this.state.apiData0.master.images[0]["product_url"])              
      
}
        
    render()
     {
      
      return (
            <div>
                {   this.state.loading || !this.state.apiData0? (<div>loading...</div>) : 
                (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={this.state.apiData0.master.images[0]["product_url"]} alt="Image1" />
                                </div>
                                <div className="col-md-5">
                                    <h3>{this.state.apiData0.name}</h3>
                                    <p>{this.state.apiData0.description}</p>
                                </div>    
                                <div className="col-md-1">
                                    <div className="vl"></div>    
                                </div>

                                
                            </div>
                        </div>
                )

                }
                
            </div>
        )
    }
}
