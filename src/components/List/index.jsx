import React from "react";
import classNames from "classnames";

import './List.scss';
import Badge from "../Badge";

const List = ({ items, isRemovable, onClick }) => {
    return (
        <ul onClick={onClick} className="list">
            {
                items.map((el, index) => 
                    <li key={index} className={classNames(el.className, { active: el.active })} >
                            <i>{el.icon ? el.icon : <Badge color={el.color} />}
                            </i>
                            <span className='span'>{el.name}</span>
                    </li>
                )
            }
          
        </ul>
    );
}

export default List;