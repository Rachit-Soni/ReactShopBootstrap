import React from 'react'

function Nav() {
    return (
        <div>
            <div className = "navBar">
                <a className= "navLogo" href = "https://www.invisalign.com">Invisalign</a>
                <div className = "cLogo">

                </div>
                <div className="navButtons">
                <a className = "btnShop" href = "#"> <img src = "./Images/cart.png"  alt="Cart"/> </a>
                </div>
               
            </div>
            <div className = "littleNav">
                    <p className="littleNavText">Free Shipping on orders above 20$</p>
                </div>
        </div>
    )
}

export default Nav;