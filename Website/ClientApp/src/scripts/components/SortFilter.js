import PropTypes from 'prop-types';
import * as React from 'react';

class SortFilter extends React.Component {
  constructor(props) {
    super(props);

    this.by = null;
    this.ascending = true;
    this.t = 0;
    this.setState({
      data: this.props.data,
    });
  }

  Sort(by) {
    this.by = by;
  }

  render() {
    return <>t</>;
  }
}

SortFilter.propTypes = {
  data: PropTypes.array.isRequired,
};

export { SortFilter };
