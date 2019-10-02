import React from 'react';
import './calci.css'

const Calsi = () => {
  return <div className='container a1'>
     <div className='container'>
  <button className='float-left btn a7'>Scientific Mode</button>
  <button className='float-right btn a5'>Dark Theme</button>
  <button className='float-right btn a6'>Light Theme</button>
     </div>

     <div className='a3 container-fluid'>
        <div className='a4 container shadow'>

       </div>
         <div className='row'>
          <button className='a2 text-center btn '>1</button>
          <button className='a2 text-center btn '>2</button>
          <button className='a2 text-center btn '>3</button>
          <button className='a2 text-center btn '>+</button>
         </div>

         <div className='row'>
          <button className='a2 text-center btn '>4</button>
          <button className='a2 text-center btn '>5</button>
          <button className='a2 text-center btn '>6</button>
          <button className='a2 text-center btn '>-</button>
         </div>

         <div className='row'>
          <button className='a2 text-center btn '>7</button>
          <button className='a2 text-center btn '>8</button>
          <button className='a2 text-center btn '>9</button>
          <button className='a2 text-center btn '>*</button>
          </div>

          <div className='row'>
           <button className='a2 text-center btn '>Clear</button>
           <button className='a2 text-center btn '>0</button>
           <button className='a2 text-center btn '>=</button>
           <button className='a2 text-center btn '>/</button>
          </div>

     </div>
  </div>
}
export default Calsi;
