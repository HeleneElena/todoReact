import React, { useState } from "react";
import List from '../List';
import Badge from "../Badge";

import closeSvg from '../../sources/img/closes.svg';

import './AddButtonList.scss';

const AddButtonList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [seletedColor, setSeletedColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState('');

  const addList = () => {
    if(!inputValue) {
      alert('Geben Sie den Namen der Liste an');
      return; // остановка, он далее не пойдет
    }
    console.log({ id: 1, name: inputValue, colorId: seletedColor });
  }

    return (
      <div className="add-list">
        <List 
        onClick={() => setVisiblePopup(!visiblePopup)}
         items={[
          {
            className: "list__add-button",
            icon: (<svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M6 1V11" 
                  stroke="#868686" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
                <path 
                  d="M1 6H11" 
                  stroke="#868686" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
                </svg>),
            name: "Liste hinzufügen",
          },
        ]} />
        {visiblePopup && (
          <div className="add-list__popup">
            <img 
              onClick={() => setVisiblePopup(false)}
              src={closeSvg} 
              alt="close button" 
              className="add-list__popup-close-btn" />
            <input  
              value={inputValue}
              onChange={e => {setInputValue(e.target.value)}}
              className="field" 
              type="text" 
              placeholder="Name der Liste" />

            <div className="add-list__popup-colors">
              {colors.map(color => ( 
                  <Badge 
                    onClick={() => setSeletedColor(color.id)} 
                    key={color.id} 
                    color={color.name}
                    className={seletedColor === color.id && 'active'}
                  />
              ))}
            </div>
            <button onClick={addList} className="btn">Hinzufügen</button>
        </div>
        )}
       </div>
    );
}

export default AddButtonList;