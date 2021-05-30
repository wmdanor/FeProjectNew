import * as React from 'react';
import { GridList, Product } from '../GridList/GridList';
import AppGridList from '../App/AppGridList';

const sortProps = [
  {
    property: 'id',
    text: 'Default',
  },
  {
    property: 'name',
    text: 'Name',
  },
  {
    property: 'price',
    text: 'Price',
  },
];

const searchProps = ['name'];

// const filterConfig = [
//   {
//     property: 'name',
//     filterType: 1,
//   },
// ];

function Main() {
  return (
    <AppGridList
      dataUrl="/api/products"
      sortProps={sortProps}
      searchProps={searchProps}
      itemComponent={Product}
    />
  );
}

export default Main;
