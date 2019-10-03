import React, { Component }from 'react';
import './calci.css'

class Calsi extends Component {
  state = {
    b1: null,
    b2: null,
    b3: null,
    b4: null,
    b5: null,
    b6: null,
    b7: null,
    b8: null,
    b9: null,
    b0: null,

    DARK: false,
    LIGHT: true,




  }

 

  render(){
if(this.state.LIGHT){

  return <div className=' a1'>
  <h1 className='text-center c2'>Calculator</h1>

     <div className='container'>

  <button className='float-left btn a5' onClick={() => this.setState({ DARK: true, LIGHT: false})}>Dark Theme</button>
  <button className='btn a6' onClick={() => this.setState({ DARK: false, LIGHT: true})}>Light Theme</button>
  <button className='float-right btn a7'>Scientific Mode</button>

     </div>

     <div className='a3 container-fluid'>
        <div className='a4 container shadow text-center'>
        </div>
         <div className='row'>
          <button className='a2 text-center btn ' onClick = {() => this.setState({ b1: 1 })}>1</button>
          <button className='a2 text-center btn ' onClick = {() => this.setState({ b2: 2 })}>2</button>
          <button className='a2 text-center btn ' onClick = {() => this.setState({ b3: 3 })}>3</button>
          <button className='a2 text-center btn ' >+</button>
         </div>

         <div className='row'>
          <button className='a2 text-center btn ' onClick = {() => this.setState({ b4: 4 })}>4</button>
          <button className='a2 text-center btn ' onClick = {() => this.setState({ b5: 5})}>5</button>
          <button className='a2 text-center btn ' onClick = {() => this.setState({ b6: 6})}>6</button>
          <button className='a2 text-center btn '  >-</button>
         </div>

         <div className='row'>
          <button className='a2 text-center btn ' onClick = {() => this.setState({ b7: 7 })}>7</button>
          <button className='a2 text-center btn ' onClick = {() => this.setState({ b8: 8 })}>8</button>
          <button className='a2 text-center btn ' onClick = {() => this.setState({ b9: 9 })}>9</button>
          <button className='a2 text-center btn '>*</button>
          </div>

          <div className='row'>
           <button className='a2 text-center btn '>Clear</button>
           <button className='a2 text-center btn 'onClick = {() => this.setState({ b0: 0 })}>0</button>
           <button className='a2 text-center btn '>=</button>
           <button className='a2 text-center btn '>/</button>
          </div>

     </div>
  </div>

}

 else return <div className=' c1'>
        <h1 className='text-center c3'>Calculator</h1>
       <div className='container'>

         <button className='float-left btn a9' onClick={() => this.setState({ DARK: true, LIGHT: false})}>Dark Theme</button>
        <button className='btn a8' onClick={() => this.setState({ DARK: false, LIGHT: true})}>Light Theme</button>
        <button className='float-right btn a7'  >Scientific Mode</button>

       </div>

       <div className='a3 container-fluid'>
          <div className='a4 container shadow text-center'>
          </div>
           <div className='row'>
            <button className='a2 text-center btn ' onClick = {() => this.setState({ b1: 1 })}>1</button>
            <button className='a2 text-center btn ' onClick = {() => this.setState({ b2: 2 })}>2</button>
            <button className='a2 text-center btn ' onClick = {() => this.setState({ b3: 3 })}>3</button>
            <button className='a2 text-center btn ' >+</button>
           </div>

           <div className='row'>
            <button className='a2 text-center btn ' onClick = {() => this.setState({ b4: 4 })}>4</button>
            <button className='a2 text-center btn ' onClick = {() => this.setState({ b5: 5})}>5</button>
            <button className='a2 text-center btn ' onClick = {() => this.setState({ b6: 6})}>6</button>
            <button className='a2 text-center btn '  >-</button>
           </div>

           <div className='row'>
            <button className='a2 text-center btn ' onClick = {() => this.setState({ b7: 7 })}>7</button>
            <button className='a2 text-center btn ' onClick = {() => this.setState({ b8: 8 })}>8</button>
            <button className='a2 text-center btn ' onClick = {() => this.setState({ b9: 9 })}>9</button>
            <button className='a2 text-center btn '>*</button>
            </div>

            <div className='row'>
             <button className='a2 text-center btn '>Clear</button>
             <button className='a2 text-center btn 'onClick = {() => this.setState({ b0: 0 })}>0</button>
             <button className='a2 text-center btn '>=</button>
             <button className='a2 text-center btn '>/</button>
            </div>

       </div>
    </div>
  }
}
export default Calsi;
