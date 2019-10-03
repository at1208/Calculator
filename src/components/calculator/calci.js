import React, { Component }from 'react';
import './calci.css';
import Fade from 'react-reveal/Fade';

class Calsi extends Component {
  state = {

    DARK: false,
    LIGHT: true,

  }

plusOperation = () => {
 
  return
}

minusOperation = () => {
  return
}

multiplyOperation = () => {
  return
}

divideOperation = () => {
  return
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

                   <div className='a3 container'>
                              <Fade bottom>
                                 <div className='a4 container shadow text-center'>
                                 </div>
                              </Fade>

                              <Fade bottom>
                                 <div className='row'>
                                  <button className='a2 text-center btn ' >1</button>
                                  <button className='a2 text-center btn '  >2</button>
                                  <button className='a2 text-center btn '  >3</button>
                                  <button className='a2 text-center btn ' >+</button>
                                 </div>
                             </Fade>

                           <Fade bottom>
                               <div className='row'>
                                  <button className='a2 text-center btn '  >4</button>
                                  <button className='a2 text-center btn '  >5</button>
                                  <button className='a2 text-center btn '  >6</button>
                                  <button className='a2 text-center btn '  >-</button>
                               </div>
                           </Fade>

                           <Fade bottom>
                              <div className='row'>
                                <button className='a2 text-center btn '  >7</button>
                                <button className='a2 text-center btn '  >8</button>
                                <button className='a2 text-center btn '  >9</button>
                                <button className='a2 text-center btn '>*</button>
                              </div>
                           </Fade>

                          <Fade bottom>
                            <div className='row'>
                               <button className='a2 text-center btn '>Clear</button>
                               <button className='a2 text-center btn ' >0</button>
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
                        <button className='a2 text-center btn '  >1</button>
                        <button className='a2 text-center btn '  >2</button>
                        <button className='a2 text-center btn '  >3</button>
                        <button className='a2 text-center btn '  >+</button>
                       </div>
                   </Fade>

             <Fade bottom>
                 <div className='row'>
                  <button className='a2 text-center btn '  >4</button>
                  <button className='a2 text-center btn '  >5</button>
                  <button className='a2 text-center btn '  >6</button>
                  <button className='a2 text-center btn '  >-</button>
                 </div>
             </Fade>

              <Fade bottom>
                 <div className='row'>
                  <button className='a2 text-center btn '  >7</button>
                  <button className='a2 text-center btn '  >8</button>
                  <button className='a2 text-center btn '  >9</button>
                  <button className='a2 text-center btn '>*</button>
                  </div>
               </Fade>

                 <Fade bottom>
                  <div className='row'>
                   <button className='a2 text-center btn '>Clear</button>
                   <button className='a2 text-center btn ' >0</button>
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
