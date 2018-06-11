import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return (
      this.props.books.map(book => {
        return (
          <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}>{ book.title }</li>
        );
      })
    );
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

/**
 * mapStateToProps: This function helps us in accessing the application state property
 * as `prop` inside a container.
 */
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

/**
 * Whenever an actionCreator is called, that action will be dispatched to all
 * the reducers in the application.
 * mapDispatchToProps: This function will dispatch the action to reducers
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook:selectBook}, dispatch);
}


// connect method will help react component to retreive with application state properties
// as props. So the objects returned from mapStateToProps and mapDispatchToProps will be
// available as `props` inside the container. Ability to retrieve the application state
// as properties inside a component promotes it to a container. Resulting BookList is a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
