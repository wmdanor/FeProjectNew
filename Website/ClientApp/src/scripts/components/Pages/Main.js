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
    <div className="container">
      <AppGridList
        dataUrl="/api/products"
        sortProps={sortProps}
        searchProps={searchProps}
        itemComponent={Product}
      />
    </div>
  );
}

export default Main;
