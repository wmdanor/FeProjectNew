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
      data={products}
      sortProps={sortProps}
      searchProps={searchProps}
      itemComponent={Product}
    />
  );
  // return <div>Main</div>;
}

export default Main;
