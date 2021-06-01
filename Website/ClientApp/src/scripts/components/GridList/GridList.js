import PropTypes from 'prop-types';
import * as React from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import SortBar from './SortBar';
import SearchBar from './SearchBar';
import Paginator from './Paginator';
import Product from './Product';
import { CartActions } from '../../actions';
import './GridList.scss';

class GridList extends React.Component {
  constructor(props) {
    super(props);

    this.initialData = [];

    this.state = {
      afterFilter: this.initialData,
      afterSearch: this.initialData,
      afterSort: this.initialData,
      afterPaginate: [],
    };

    this.updateData = (state) => {
      this.setState(state);
    };

    this.isInCart = (product) => {
      const { cartProducts } = this.props;
      return (
        cartProducts.findIndex((item) => item.product.id === product.id) !== -1
      );
    };
  }

  componentDidMount() {
    fetch(this.props.dataUrl)
      .then((res) => res.json())
      .then((data) => {
        this.initialData = data.data;
        this.setState({
          afterFilter: this.initialData,
          afterSearch: this.initialData,
          afterSort: this.initialData,
          afterPaginate: [],
        });
      });
  }

  createItemsList(items) {
    if (items.length) {
      return items.map((item) => (
        <li className="gridlist-item">
          <Product
            product={item}
            isInCart={this.isInCart}
            incrementProduct={this.props.incrementProduct}
          />
        </li>
      ));
    }
    return <li className="gridlist-item-empty">Empty</li>;
  }

  render() {
    const { sortProps, searchProps } = this.props;

    return (
      <div>
        <div className="gridlist-bar">
          <SearchBar
            initialData={this.state.afterFilter}
            update={this.updateData}
            searchProps={searchProps}
          />
          <SortBar
            data={this.state.afterSearch}
            update={this.updateData}
            sortProps={sortProps}
          />
        </div>
        <ul className="gridlist-list">
          {this.createItemsList(this.state.afterPaginate)}
        </ul>
        <Paginator
          update={this.updateData}
          data={this.state.afterSort}
          pageSize={4}
        />
      </div>
    );
  }
}

GridList.propTypes = {
  dataUrl: PropTypes.string.isRequired,
  sortProps: PropTypes.object.isRequired,
  searchProps: PropTypes.array.isRequired,
  cartProducts: PropTypes.instanceOf(Immutable.List).isRequired,
  incrementProduct: PropTypes.func.isRequired,
};

export default GridList;
