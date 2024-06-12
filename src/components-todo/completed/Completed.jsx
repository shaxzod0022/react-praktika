import React, {useEffect, useState} from 'react';
import completed from './Completed.module.css';
import {useSelector} from 'react-redux';

const Completed = () => {
  const fromRedux = useSelector (data => data.todoData);

  return (
    <div className={completed.container}>
      <h2>Completed</h2>
      <ul className={completed.tasks}>
        {fromRedux.data.map ((item, index) => {
          if (item.completed === true) {
            return (
              <li key={index}>
                <div>
                  <p>
                    {item.title}
                  </p>
                </div>
                <div>
                  <button>👌</button>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Completed;
