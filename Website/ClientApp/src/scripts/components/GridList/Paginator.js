﻿import PropTypes from 'prop-types';
import * as React from 'react';
import getHashCode from '../../getHashCode';

const buttonStyle = {
  padding: '8px',
  border: '1px solid black',
  margin: '4px',
  fontSize: '20px',
};

const currentStyle = {
  display: 'inline-block',
  padding: '8px',
  border: '1px solid red',
  margin: '4px',
  fontSize: '20px',
};

class Paginator extends React.Component {
  constructor(props) {
    super(props);

    this.hashCode = null;

    this.state = {
      currentPage: 1,
    };

    this.goToPageHandler = (page) => (e) => {
      e.preventDefault();
      this.setState({
        currentPage: page,
      });
      this.goToPage(page);
    };
  }

  generatePagesList() {
    const { data, pageSize } = this.props;
    const preMath = Math.ceil(data.length / pageSize);
    const pagesNumber = preMath === 0 ? 1 : preMath;
    const { currentPage } = this.state;

    if (pagesNumber < currentPage) {
      this.setState({
        currentPage: pagesNumber,
      });
      this.goToPage(pagesNumber);
    }

    const pages = [];

    const offset = 2;

    if (this.state.currentPage > offset + 3) {
      pages.push({ i: 1, text: 'First' });
      pages.push({ text: '...' });
    }
    if (currentPage === offset + 3) {
      pages.push({ i: 1, text: 1 });
      pages.push({ i: 2, text: 2 });
    }
    if (currentPage === offset + 2) {
      pages.push({ i: 1, text: 1 });
    }
    for (let i = Math.max(currentPage - offset, 1); i < currentPage; i += 1) {
      pages.push({ i, text: i });
    }
    pages.push({ text: currentPage });
    for (
      let i = currentPage + 1;
      i <= Math.min(currentPage + offset, pagesNumber);
      i += 1
    ) {
      pages.push({ i, text: i });
    }
    if (currentPage + offset + 1 === pagesNumber) {
      pages.push({ i: pagesNumber, text: pagesNumber });
    }
    if (currentPage + offset + 2 === pagesNumber) {
      pages.push({ i: pagesNumber - 1, text: pagesNumber - 1 });
      pages.push({ i: pagesNumber, text: pagesNumber });
    }
    if (currentPage + offset + 2 < pagesNumber) {
      pages.push({ text: '...' });
      pages.push({ i: pagesNumber, text: 'Last' });
    }

    return pages;
  }

  componentDidMount() {
    this.goToPage(1);
  }

  componentDidUpdate() {
    this.goToPage(this.state.currentPage);
  }

  goToPage(page) {
    const { data, pageSize, update } = this.props;

    const offset = (page - 1) * pageSize;

    const pageData = data.slice(offset, offset + pageSize);

    const newHashCode = getHashCode(pageData);
    if (this.hashCode === newHashCode) {
      return;
    }
    this.hashCode = newHashCode;

    // update(pageData);
    update({
      afterPaginate: pageData,
    });
  }

  createPaginationButton(item) {
    return item.i ? (
      <button
        style={buttonStyle}
        type="button"
        data-page={item.i}
        onClick={this.goToPageHandler(item.i)}
      >
        {item.text}
      </button>
    ) : (
      <span style={currentStyle}>{item.text}</span>
    );
  }

  render() {
    const pages = this.generatePagesList();

    return (
      <nav role="navigation">
        {pages.map((item) => this.createPaginationButton(item))}
      </nav>
    );
  }
}

Paginator.propTypes = {
  // initialData: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
  pageSize: PropTypes.number,
};

Paginator.defaultProps = {
  pageSize: 8,
};

export default Paginator;
