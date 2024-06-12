import React, {useEffect, useState} from 'react';
import notCompleted from './NotCompleted.module.css';
import {useSelector} from 'react-redux';

const NotnotCompleted = () => {
  const fromRedux = useSelector (data => data.todoData);
 
  return (
    <div className={notCompleted.container}>
      <h2>Not Completed</h2>
      <ul className={notCompleted.tasks}>
        {fromRedux.data.map ((item, index) => {
          if (item.completed === false) {
            return (
              <li key={index}>
                <div>
                  <p>
                    {item.title}
                  </p>
                </div>
                <div>
                  <button>✖️</button>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default NotnotCompleted;
