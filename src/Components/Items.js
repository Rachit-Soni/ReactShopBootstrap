import React, {useState, useEffect} from 'react';


const Items = props => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [item, setItem] = useState([]);

    let fetchItems = async () => {

        let data = await fetch('https://api.myjson.com/bins/1hj9cq');
            let item = await data.json();
            //console.log(items.products);
            setItem(item.products);
    };

    function btnCart (event){
        console.log('Button Works!')
        let specificItem = item[0];
        console.log('Quantity =' +qty, specificItem)
        
};

    let qty=1;
    function updateItem(event) {
        ++qty;
        console.log(qty)
    }
    

return (
    <div>
     
      {
           item.map(item => (
          <div key = {item.id}>
             
              <div className="shopItemStyle">
                  <h4> {item.name}<br /> </h4>
                  <p>{item.description}<br /><br /></p>
                  <img alt="Product" src= {item.master.images[0]["product_url"]  }/>
                  <p>Price {item.price} </p>
                  <div>
                  <input type = "number" name="quantity" min="1" max="5" onChange={updateItem}></input>    
                  <button className="cartButton" onClick={btnCart}>Add to Cart</button>   
                  <br /><br />
                  </div>
              </div> 
          </div>
      ))} 
    </div>
  );
}

export default Items