import React from 'react';
import ICONS from '../data/icons';


const Icon = props => {
  const { image, link } = props.icon;

  return (
    <div style={{ display: 'inline-block' }}>
      <a href={link}><img src={image} alt='icon' style={{ height: 40, width: 40, margin: 10 }} /></a>
    </div>
  )
}

const Icons = () => (
  <div>
    <h2>Connect With Me!</h2>
    <div>
      {
        ICONS.map((ICON) => (
          <Icon key={ICON.id} icon={ICON} />
        ))
      }
    </div>
  </div>
)

export default Icons;