import React, { Component }from 'react';
import './calci.css';
import Fade from 'react-reveal/Fade';

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

    operator1: null,
    operator2: null,
    operator3: null,
    operator4: null,


    DARK: false,
    LIGHT: true,




  }



  render(){
if(this.state.LIGHT){

  return <div className=' a1'>

                  <Fade bottom>
                     <h1 className='text-center c2'>Calculator</h1>
                  </Fade>

                  <Fade bottom>
                     <div className='container'>

                              <Fade bottom>
                                 <button className='btn float-left a6' onClick={() => this.setState({ DARK: false, LIGHT: true})}>Light Theme</button>
                              </Fade>
                              <Fade bottom>
                                 <button className='btn a5' onClick={() => this.setState({ DARK: true, LIGHT: false})}>Dark Theme</button>
                              </Fade>
                              <Fade bottom>
                                 <button className='float-right btn a7'>Scientific Mode</button>
                              </Fade>

                     </div>
                  </Fade>

                   <div className='a3 container-fluid'>
                              <Fade bottom>
                                 <div className='a4 container shadow text-center'>
                                 </div>
                              </Fade>

                              <Fade bottom>
                                 <div className='row'>
                                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b1: 1 })}>1</button>
                                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b2: 2 })}>2</button>
                                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b3: 3 })}>3</button>
                                  <button className='a2 text-center btn ' >+</button>
                                 </div>
                             </Fade>

                           <Fade bottom>
                               <div className='row'>
                                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b4: 4 })}>4</button>
                                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b5: 5})}>5</button>
                                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b6: 6})}>6</button>
                                  <button className='a2 text-center btn '  >-</button>
                               </div>
                           </Fade>

                           <Fade bottom>
                              <div className='row'>
                                <button className='a2 text-center btn ' onClick = {() => this.setState({ b7: 7 })}>7</button>
                                <button className='a2 text-center btn ' onClick = {() => this.setState({ b8: 8 })}>8</button>
                                <button className='a2 text-center btn ' onClick = {() => this.setState({ b9: 9 })}>9</button>
                                <button className='a2 text-center btn '>*</button>
                              </div>
                           </Fade>

                          <Fade bottom>
                            <div className='row'>
                               <button className='a2 text-center btn '>Clear</button>
                               <button className='a2 text-center btn 'onClick = {() => this.setState({ b0: 0 })}>0</button>
                               <button className='a2 text-center btn '>=</button>
                               <button className='a2 text-center btn '>/</button>
                            </div>
                          </Fade>
                   </div>
     </div>

}

 else return <div className=' c1'>

           <Fade bottom>
              <h1 className='text-center c3'>Calculator</h1>
          </Fade>


          <Fade bottom>
                <div className='container'>
                      <Fade bottom>
                        <button className='float-left btn a8' onClick={() => this.setState({ DARK: false, LIGHT: true})}>Light Theme</button>
                      </Fade>

                      <Fade bottom>
                        <button className='btn a9' onClick={() => this.setState({ DARK: true, LIGHT: false})}>Dark Theme</button>
                      </Fade>

                      <Fade bottom>
                        <button className='float-right btn a7'  >Scientific Mode</button>
                      </Fade>
                </div>
        </Fade>

<Fade bottom>
             <div className='a3 container-fluid'>
                   <Fade bottom>
                     <div className='a4 container shadow text-center'>
                      </div>
                   </Fade>

                    <Fade bottom>
                       <div className='row'>
                        <button className='a2 text-center btn ' onClick = {() => this.setState({ b1: 1 })}>1</button>
                        <button className='a2 text-center btn ' onClick = {() => this.setState({ b2: 2 })}>2</button>
                        <button className='a2 text-center btn ' onClick = {() => this.setState({ b3: 3 })}>3</button>
                        <button className='a2 text-center btn ' >+</button>
                       </div>
                   </Fade>

             <Fade bottom>
                 <div className='row'>
                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b4: 4 })}>4</button>
                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b5: 5})}>5</button>
                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b6: 6})}>6</button>
                  <button className='a2 text-center btn '  >-</button>
                 </div>
             </Fade>

              <Fade bottom>
                 <div className='row'>
                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b7: 7 })}>7</button>
                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b8: 8 })}>8</button>
                  <button className='a2 text-center btn ' onClick = {() => this.setState({ b9: 9 })}>9</button>
                  <button className='a2 text-center btn '>*</button>
                  </div>
               </Fade>

                 <Fade bottom>
                  <div className='row'>
                   <button className='a2 text-center btn '>Clear</button>
                   <button className='a2 text-center btn 'onClick = {() => this.setState({ b0: 0 })}>0</button>
                   <button className='a2 text-center btn '>=</button>
                   <button className='a2 text-center btn '>/</button>
                  </div>
                 </Fade>

             </div>
</Fade>
    </div>
  }
}
export default Calsi;
