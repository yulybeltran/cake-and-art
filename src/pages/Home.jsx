import React from 'react';
import {Banner} from '../components/Banner';

import {Category} from '../components/Category';
import { ShoppingCart } from '../components/Shoppingcart';


function Home() {
  return <div>
    <Banner />
    <Category/>
    <ShoppingCart/> 
  </div>;
}

export {Home}

