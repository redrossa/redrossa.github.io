import '../css/Tool.css'

import React from 'react';
import {Link} from "react-router-dom";

export default function Tool(props) {
  const icon = props.icon && React.createElement(props.icon, {className: 'icon'});
  const desc = <span className='desc'>{props.children}</span>;
  return (
      <li className='tool'>
        {props.href ?
            <a href={props.dest}>
              <div className='icon-container'>
                {icon}
              </div>
              {desc}
            </a> :
            <Link to={props.dest}>
              <div className='icon-container'>
                {icon}
              </div>
              {desc}
            </Link>}
      </li>
  );
}