import React, { useState } from 'react';
import { createRoutine } from '../api';

// const MyRoutines = () => {
  //   return (
     
  //   );
  // }

  const MyRoutines = ({token,fetchRoutines ,navigate}) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const newRoutine = {
      name,
      goal,
       isPublic
    };
    
    async function addRoutine () {
      const results = await createRoutine(token, newRoutine)
      // fetchRoutines();
      navigate(`/routines`)
    }
    return(
      <div>
    <h1>Welcome to the my routines page!</h1>
    
      <form onSubmit={ (ev) =>{
        ev.preventDefault();
        addRoutine();
      }}>
        <input
            type='text'
            placeholder='name'
            onChange={(ev) => setName(ev.target.value) }/>
            <input
            type='text'
            placeholder='goal'
            onChange={(ev) => setGoal(ev.target.value) }/>
            <input
            type='checkbox'
            onChange={(ev) => setIsPublic(ev.target.checked) }/>
            <button id='button' type='submit' >Create Routine</button>
      </form>
      </div>
    )
  }

export default MyRoutines