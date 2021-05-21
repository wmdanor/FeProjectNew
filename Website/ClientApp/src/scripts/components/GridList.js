import PropTypes from 'prop-types';
import * as React from 'react';

function Product({ product }) {
  return (
    <div key={product.id}>
      <p>Id - {product.id}</p>
      <p>Name - {product.name}</p>
      <p>Price - {product.price}</p>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

class SortMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sortProperty: '',
      sortDirection: 'asc',
    };
  }

  sort(sortBy) {
    const { update, data } = this.props;
    
    const sorted = [...this.props.data].sort((a, b) => b[sortBy] - a[sortBy]);

    if (this.state.data !== sorted) {
      this.setState({
        data: sorted,
        sortBy,
      });
      update({
        sortProperty: '',
        sortDirection: 'asc',
      });
    }
  }
  
  render() {
    return (
      <select onChange={(e) => this.sortList(e.target.value)}>
        <option value="id">Default</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    );
  }
}

class GridList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialData: this.props.data,
      data: this.props.data,
      sortBy: 'id',
      isAscending: true,
    };
  }

  updateData(config) {
    this.setState(config);
  }

  sortList(sortBy) {
    const sorted = [...this.props.data].sort((a, b) => b[sortBy] - a[sortBy]);

    if (this.state.data !== sorted) {
      this.setState({
        data: sorted,
        sortBy,
      });
    }
  }

  setSortDirection(isAscending) {
    this.setState({
      isAscending,
    });
  }

  setData(data) {
    this.setState({
      data,
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.data.map((product) => (
            <Product product={product} />
          ))}
        </div>
        <div>1, 2, 3</div>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

GridList.propTypes = {
  data: PropTypes.array.isRequired,
};

export { GridList };
