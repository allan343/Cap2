import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import HomeworkItem from '../HomeworkItem/HomeworkItem';
import HomeworkDetails from '../HomeworkDetails/HomeworkDetails';
import ApiContext from '../ApiContext/ApiContext';
import './Placeholder.css';

class Placeholder extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    message: ''
  };

  constructor(props) {
    super(props);

  }

  render() {
    const { message } = this.props;
    return (
      <div className='MessageWrapper'>
        <div className="message">
          {message}
        </div>
      </div>
    );
  }
}

export default Placeholder;
