import PropTypes from 'prop-types';
import * as React from 'react';

class Paginator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  find(query) {
    this.setState({
      query,
    });

    const data = this.props.initialData;
    const { searchProps, update } = this.props;

    const filter = data.filter((item) => {
      for (let i = 0; i < searchProps.length; i += 1) {
        if (item[searchProps[i]].toLowerCase().startsWith(query)) {
          return true;
        }
      }
      return false;
    });

    update(filter);
  }

  render() {
    const pagesNumber = Math.ceil(this.props.data / 2);
    const pages = [];
    for (let i = 1; i <= pagesNumber; i += 1) {
      pages.push({ page: i, text: i });
    }

    return (
      <span>
        {pages.map((item) => (
          <span data-page={item.page}>item.text</span>
        ))}
      </span>
    );
  }
}

Paginator.propTypes = {
  // initialData: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
  searchProps: PropTypes.array.isRequired,
};

export default FilterMenu;
