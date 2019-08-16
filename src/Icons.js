import React, { Component } from 'react';
import ICONS from './data/icons';


class Icon extends Component {
  render() {
    const { image, link} = this.props.icons;

    return (
      <div style={{ display: 'inline-block', width: 15, margin: 10}}>
        <a href={link}><img src={image} alt='icon' style={{ height: 30, width: 30}} /></a>
      </div>
    )
  }
}

class Icons extends Component {
  render() {
    return (
      <div>
        <h3>Contact:</h3>
        <div>
          {
          ICONS.map((ICON) => {
            return (
              <Icon key={ICON.id} icons={ICON}/>
            );
          })
        }
        </div>
      </div>
    )
  }
}

export default Icons;