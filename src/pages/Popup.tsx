import React, { useEffect, useState } from 'react';
import { editPopup, getPopup } from '../lib/popup';

import './Popup.css';

/**
 * Step 3: Render a form and everything needed to be able to edit the popup
 */
export const Popup = () => {
  const [popup, setPopup] = useState({ id: 0, message: 'Loading...' });
  useEffect(() => {
    async function fetchPopupData() {
      const popup: popup = await getPopup();
      setPopup(popup);
    }
    fetchPopupData();
  }, []);

  const handleFormSubmit = async () => {
    const newMessage = await editPopup(popup);
    window.alert(`Popup message successfully updated to :- ${newMessage.message}`)

  };


  return (
    <div className='form'>
      <h2 className='bottomMargin'>Popup message editor</h2>
      <form onSubmit={handleFormSubmit} >
        <div className='form-group'>
          <label  htmlFor='messageInput'>Enter new popup message:</label><br></br>
          <textarea rows={4} cols={50} name='name' value={popup.message} onChange={(e)=>setPopup({id: popup.id, message: e.target.value})} id='messageInput' placeholder='Name' />
        </div>
        <input type='submit' value='Submit' className='submitButton' />
      </form>
    </div>
)};
