import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

export default function Details() {
        let [product, setProduct] = useState(null);
        let { id } = useParams();
        
        useEffect(() => {
           console.log(id);
           axios.get("http://localhost:1234/products/" + id).then( response => {
            let prd = response.data;
            if (prd !== null) {
                if(!prd.img.startsWith("/"))
                prd.img = "/" + prd.img;
                setProduct(prd);
             }
        });
        }, [id]);

        if (product != null) {
           let {title, img, price} = product;
           return (
              <div className="container">
                 <h1>Name : {title}</h1>
                 <h1>Price : {price}</h1>
                 <img src={img} alt={name} />
              </div>
           )
        } else {
           return <div>Product doesn't exist</div>
        }
}
