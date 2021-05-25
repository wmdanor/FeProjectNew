import * as React from 'react';
import { GridList, Product } from '../GridList/GridList';

const products = [
  {
    id: 1,
    name: 'Game',
    price: 10,
  },
  {
    id: 2,
    name: 'Cock',
    price: 5,
  },
  {
    id: 3,
    name: 'Anus',
    price: 30,
  },
  {
    id: 4,
    name: 'Phone',
    price: 50,
  },
  {
    id: 5,
    name: 'Shit',
    price: 2,
  },
  {
    id: 6,
    name: 'PC',
    price: 80,
  },
  {
    id: 7,
    name: 'Pen',
    price: 8,
  },
  {
    id: 8,
    name: 'Lighter',
    price: 30,
  },
  {
    id: 9,
    name: 'Mouse',
    price: 15,
  },
];

const sortProps = {
  id: 'Default',
  name: 'Name',
  price: 'Price',
};

const searchProps = ['name'];

function Main() {
  return (
    <GridList
      dataUrl="/api/products"
      // data={products}
      sortProps={sortProps}
      searchProps={searchProps}
      itemComponent={Product}
    />
  );
  // return <div>Main</div>;
}

export default Main;
