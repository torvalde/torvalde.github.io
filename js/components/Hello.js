import React from 'react';
import Reflux from 'reflux';

import 'normalize.css';
import {hello} from './Hello.css';


const propTypes = {
};

const defaultProps = {

};

/**
 * Main class for the PhotoStream project
 */
class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    alert("page "+this.props.page.substring(1));
    return (
      <div className={hello}>Hello</div>
    );
  }
}

Hello.propTypes = propTypes;
Hello.defaultProps = defaultProps;

export default Hello;
