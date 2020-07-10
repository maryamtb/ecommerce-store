import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className='content'>
    <h3 className='title'>NEW COLLECTION</h3>
      <p className='title2'>{title.toUpperCase()}</p>
    </div>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    
  </div>
);

export default withRouter(MenuItem);
