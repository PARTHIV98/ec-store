import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Component } from "react";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import Shop_Data from './shopData'


const Shop = () => {

    const [collection, setCollection] = useState(Shop_Data);
    
     console.log(collection);
      return(
         
        <div className="shop-page">
            {collection.map(({ id , ...otherCollectionData}) => (
                    <CollectionPreview key={id} {...otherCollectionData} />
                ))
            }
        </div>
      )

  
  
    
}

export default Shop;
