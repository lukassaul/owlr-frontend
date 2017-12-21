import React from 'react';
import img from '../assets/images/react_logo_512x512.png';
import { connect } from 'react-redux';


class Headline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 id="heading">Hello ReactJS</h2>
        <img
          className="image"
          style={{ margin: '0.5em' }}
          height="40"
          width="40"
          src={img}
          alt="React Logo"
        />
      </div>
    );
  }
}


export default connect()(Headline);
