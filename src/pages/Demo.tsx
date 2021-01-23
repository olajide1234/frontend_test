import React, { useState, useEffect } from 'react';

import { getPopup, shouldPopupDisplay } from '../lib';
import { setCookie } from '../helpers/cookieHelpers'

import './Demo.css';


export const Demo: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popup, setPopup] = useState({id: 0, message: 'Loading...'});
  useEffect(() => {
    async function fetchPopupData() {
      const popup: popup = await getPopup();
      const showPopup = await shouldPopupDisplay();
      setPopup(popup);
      setShowPopup(showPopup);
      setCookie('wisepopsvisited', true, 2);
    }
    fetchPopupData();
  }, [])

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
      <h1 className='welcomeText' onClick={() => setShowPopup(true)}>Show Popup Forcefully 🎉</h1>
    </div>
  );
};
