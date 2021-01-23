import React, { useState } from 'react';

import { getPopup } from '../lib/popup';

import './Demo.css';


export const Demo: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popup: popup = getPopup();

  /**
   * Step 1: Render popup message in an overlay
   */
  return (
    <div>
      <div className={showPopup ? 'container' : 'containerHidden'}>
        <div className={showPopup ? 'panel' : 'panelHidden'}>
          <div className = 'modal'>
            <h3 className='modalTitle'>{popup.message}</h3>
            <a className='closeText' onClick={() => setShowPopup(false)}>Close</a>
          </div>
        </div>
        <div className={showPopup ? 'mask' : 'maskHidden'} onClick={() => setShowPopup(false)} />
      </div>
      <h1 className='welcomeText' onClick={() => setShowPopup(true)}>Show Popup 🎉</h1>
    </div>
  );
};
