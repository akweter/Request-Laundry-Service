import React from 'react';
import Usetate1 from './useState1';
import Usetate2 from './useState2';
import Usetate3 from './useState3';
import UseReducer1 from '../reducers/useReducer1';
import UseEffect1 from './UseEffect1';
import UseRefHook1 from './UseRefHook';


function RenderHooks() {

  return (
    <div>
        <span className='container'>
          <span className='col col-md-4'> <Usetate1/></span>
          <span className='col col-md-6'><Usetate2/></span>
          <span className='col col-md-4'><Usetate3/></span>
          </span>
          <span className='container'>
          <span className='col col-md-4'><UseReducer1/></span>
          <span className='col col-md-4'><UseEffect1/></span>
          <span className='col col-md-4'><UseRefHook1/></span>
      </span>
      <span className='animatio'>
        <span className='animation'>Monday</span>
        <span className='animation'>Tuesday</span>
        <span className='animation'>Wednesday</span>
        <span className='animation'>Thursday</span>
        <span className='animation'>Friday</span>
        <span className='animation'>Saturday</span>
      </span>
    </div>
  );
}

export default RenderHooks;

//390
