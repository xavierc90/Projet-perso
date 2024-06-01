import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const Widget = () => {
  const [showWidget, setShowWidget] = useState(false);

  const handleShowWidget = () => {
    setShowWidget(true);
    console.log('Widget displayed');
  };

  const handleHideWidget = () => {
    setShowWidget(false);
    console.log('Widget hidden');
  };

  return (
    <div>
      <button 
        id="booking" 
        className="bg-white text-black font-semibold text-xs drop-shadow-md uppercase p-3"
        onClick={handleShowWidget}>
        Réserver en ligne
      </button>
      
      <div id="booking-widget">
        <div className={`bg-green-800 content-center text-white text-xs w-25 fixed bottom-0 right-10 px-3 py-2 flex rounded-t-lg p-1 gap-3 ${showWidget ? '' : 'hidden'}`}>
          Réserver une table  
          <div className='flex justify-center content-center gap-2'>
              <FontAwesomeIcon icon={faAngleDown} />
              <FontAwesomeIcon icon={faTimes} onClick={handleHideWidget} className='cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
