import React, {useEffect, useState} from 'react';
import home from './Home.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByAmout} from '../../app/counterSlice';
import {createData} from '../../app/todoSlice';

const Home = () => {
  const [value, setValue] = useState ('');
  const [completedId, setCompletedId] = useState (null);
  const [completedValue, setCompletedValue] = useState ('');
  const toRedux = useDispatch ();
  const todo = useSelector (item => item.todoData).data;

  const handleChangeText = text => {
    setValue (text);
  };

  const handleChangeAdd = () => {
    if (value == false) {
      console.log ('Error');
    } else {
      let clone = [...todo];
      clone.push ({
        id: todo.length,
        title: value,
        completed: false,
        isDeleted: false,
      });
      setValue ('');
      toRedux (createData (clone));
    }
  };

  const deleteTask = id => {
    let clone = [...todo];
    let delArr = clone.map (item => {
      if (item.id === id) {
        return {...item, isDeleted: !item.isDeleted};
      } else {
        return item;
      }
    });
    toRedux (createData ([...delArr]));
  };

  const completed = id => {
    setCompletedValue (todo.find (item => item.id === id).title);
    setCompletedId (todo.find (item => item.id === id).id);
  };

  const updateBtn = () => {
    const updateTask = todo.map (task => {
      if (task.id === completedId) {
        return {...task, title: completedValue};
      } else {
        return task;
      }
    });
    setCompletedId (null);
    setCompletedValue ('');
    toRedux (createData (updateTask));
  };

  const handaleComplated = id => {
    let clone = [...todo];
    let newArr = clone.map (item => {
      if (item.id === id) {
        return {...item, completed: !item.completed};
      } else {
        return item;
      }
    });
    toRedux (createData ([...newArr]));
  };

  return (
    <div className={home.container}>
      <div className={home.form__control}>
        <label htmlFor="">Add Task</label>
        <div>
          <input
            value={value}
            onChange={text => handleChangeText (text.target.value)}
            type="text"
            placeholder="Task"
          />
          <button onClick={handleChangeAdd}>Add</button>
        </div>
      </div>
      <div className={home.task__container}>
        <h3>Tasks ⬇️</h3>
        <ul className={home.tasks}>
          {todo.map ((item, index) => {
            return (
              <li
                style={item.isDeleted ? {display: 'none'} : {display: 'flex'}}
                key={index}
              >
                <div>
                  {item.id === completedId
                    ? <input
                        className={home.updateInput}
                        value={completedValue}
                        onChange={e => setCompletedValue (e.target.value)}
                        type="text"
                      />
                    : <p
                        style={
                          item.completed
                            ? {textDecoration: 'line-through'}
                            : {textDecoration: 'none'}
                        }
                      >
                        {item.title}
                      </p>}
                </div>
                <div>
                  <button onClick={() => handaleComplated (item.id)}>👌</button>
                  {item.id === completedId
                    ? <button onClick={updateBtn}>✔️</button>
                    : <button onClick={id => completed (item.id)}>🖋️</button>}
                  <button onClick={() => deleteTask (item.id)}>✖️</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
