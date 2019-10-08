import React,{useContext} from 'react';
import {ProductContext} from '../Context/ProductContext'

import Product from './Product';

const Products =  () => {
const{ products , addItem }=useContext(ProductContext)
	return (
		<ProductContext.Provider>
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
		</ProductContext.Provider>
	);
};

export default Products;