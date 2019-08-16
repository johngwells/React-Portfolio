import React, { Component } from 'react';
import ICONS from './data/icons';


class Icon extends Component {
  render() {
    console.log('this.props', this.props)
    const { image, link} = this.props.icon;

    return (
      <div style={{ display: 'inline-block'}}>
        <a href={link}><img src={image} alt='icon' style={{ height: 40, width: 40, margin: 10}} /></a>
      </div>
    )
  }
}

class Icons extends Component {
  render() {
    return (
      <div>
        <h2>Conect With Me!</h2>
        <div>
          {
          ICONS.map((ICON) => {
            return (
              <Icon key={ICON.id} icon={ICON} />
            );
          })
        }
        </div>
      </div>
    )
  }
}

export default Icons;