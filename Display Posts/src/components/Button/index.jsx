import './styles.css'

import { Component } from 'react';

export class Button extends Component {


  render () {
    const {text, eventClick, disabled} = this.props;

    return (
      <button disabled={disabled} onClick={eventClick} className='button'>
        {text}
      </button>
    )
  };
};