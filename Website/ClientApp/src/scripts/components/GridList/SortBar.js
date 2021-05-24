import PropTypes from 'prop-types';
import * as React from 'react';

class SortBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortProperty: 'id',
      sortDirection: 1,
    };
  }

  sort(sortProperty, sortDirection) {
    const { update, data } = this.props;
    // const { sortProperty, sortDirection } = this.state;

    const sorted = [...data].sort(
      (a, b) => sortDirection * (a[sortProperty] > b[sortProperty] ? 1 : -1),
    );
    update(sorted);
  }

  setProperty(property) {
    this.setState({
      sortProperty: property,
    });

    this.sort(property, this.state.sortDirection);
  }

  setDirection(direction) {
    let newDirection = 0;
    if (direction === 'asc') {
      newDirection = 1;
      this.setState({
        sortDirection: 1,
      });
    } else if (direction === 'desc') {
      newDirection = -1;
    }

    if (newDirection !== 0) {
      this.setState({
        sortDirection: newDirection,
      });

      this.sort(this.state.sortProperty, newDirection);
    }
  }

  render() {
    const { sortProps } = this.props;

    return (
      <div>
        <select onChange={(e) => this.setProperty(e.target.value)}>
          {Object.keys(sortProps).map((key) => (
            <option value={key}>{sortProps[key]}</option>
          ))}
        </select>
        <select onChange={(e) => this.setDirection(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    );
  }
}

SortBar.propTypes = {
  // initialData: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
  sortProps: PropTypes.object.isRequired,
};

export default SortBar;
