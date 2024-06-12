import React, {useEffect, useState} from 'react';
import delet from './Deleted.module.css';
import {useSelector} from 'react-redux';
const Deleted = () => {
  const fromRedux = useSelector (data => data.todoData);

  // const deleteTask = id => {
  //   let delTask = arr.filter (item => item.id !== id);
  //   setArr (delTask);
  // };

  return (
    <div className={delet.container}>
      <h2>Deleted</h2>
      <ul className={delet.tasks}>
        {fromRedux.data.map ((item, index) => {
          if (item.isDeleted === true) {
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

export default Deleted;
