import React from "react";
import classNames from "classnames";

import './List.scss';

const List = ({ items, isRemovable }) => {
    return (
        <ul className="list">
            {
                items.map((el, index) => 
                    <li key={index} className={classNames(el.className, {'active': el.active})} >
                        <i>
                            <i>{el.icon ? (
                                el.icon
                                ) : (
                                <i className={`badge badge--${el.color}`} ></i> 
                                )} </i>
                            <span className='span'>{el.name}</span>
                        </i>
                    </li>
                )
            }
          
        </ul>
    );
}

export default List;