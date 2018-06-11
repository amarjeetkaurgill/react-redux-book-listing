import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Please select a book to see details.</div>;
    }
    return(
      <div>
        <h3>Book Details:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Type: {this.props.book.type}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {book: state.activeBook};
}

export default connect(mapStateToProps)(BookDetail);
