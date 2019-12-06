import React, { Component } from 'react'

import {Link} from 'react-router-dom'


export default class Nav extends Component {

    


    render() {
        return (
             <div>
            <div className = "navBar">
               <h3 className="navLogo"> 
                   <a style={{ textDecoration: 'none', color: 'white' }} 
                   href = "https://www.invisalign.com"> Invisalign® 
                   </a> </h3>


                <Link to = '/Cart'>
                <div className="cartImage" >
                   <input type="image" src="https://image.flaticon.com/icons/svg/1360/1360131.svg" 
                   alt="Cart" className="cartImg" onClick={this.cartHandler}/>
                </div>
                </Link>

               
               
            </div>
            <div className = "littleNav">
                    <p className="littleNavText">Free Shipping on orders above 20$</p>
                    
                    
                </div>
        </div>
        )
    }
}
