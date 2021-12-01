import css from "./SetQuestion.css";
import axios from 'axios'
import { useEffect, useState, } from "react";
function SetQuestion(){


    let [courselist,setcourselist]=useState([])
    let [chosenOpt,setchosenopt]=useState('no-options')
    let [question,setquestion]=useState([])
    let [timer,settimer]=useState({time:'',course:'',type:'',staffEmail:''})
    let [savedQuestion, handlesavedQuestn]= useState([])
    let [gotopage,setpage]=useState('questionpage')
    async function getFaculty(){
        
        let getStaff = localStorage.getItem('staffEmail')
        await axios. post('http://localhost:2009/getInfo/staff/course',{getStaff}).then(res=>{
            setcourselist([...res.data])
         })
       
      }
    
       useEffect( () => {
        getFaculty()  
        })

// HANDLING QUESTION-OPTION TYPE AND FUNCTIONS
        async function questiontype(event){
                setchosenopt(event.target.value)

        }



//HANDLING OPTIONS PART AND FUNCTIONS
        let questLog =[]
        let quest={}
        function handleaddquestionevent(event,type){
           
             if (chosenOpt == 'Options'){
                 if (type =='optA'){
                 quest.optionA =event.target.value
                } else if (type =='optB'){
                quest.optionB =event.target.value
               }
               else if (type =='optC'){
                quest.optionC =event.target.value
               }
               else if (type =='optD'){
                quest.optionD =event.target.value
               }    
            } else if (chosenOpt == 'Multiple-Options'){
                if (type =='MoptA'){
                    quest.optionA =event.target.value
                   } else if (type =='MoptB'){
                   quest.optionB =event.target.value
                  }
                  else if (type =='MoptC'){
                   quest.optionC =event.target.value
                  }
                  else if (type =='MoptD'){
                   quest.optionD =event.target.value
                  } 
                  else if (type =='MoptE'){
                    quest.optionE =event.target.value
                   }
                   else if (type =='MoptF'){
                    quest.optionF =event.target.value
                   }
                   else if (type =='MoptG'){
                    quest.optionG =event.target.value
                   } 
                   else if (type =='MoptH'){
                    quest.optionH =event.target.value
                   }
                   else if (type =='MoptI'){
                    quest.optionI =event.target.value
                   }
                   else if (type =='MoptJ'){
                    quest.optionJ =event.target.value
                   } 
                   else if (type =='MoptK'){
                    quest.optionK =event.target.value
                   }
                   else if (type =='MoptL'){
                    quest.optionL =event.target.value
                   }
            }
       
        }

// HANDLING MAIN QUESTION PART AND FUNCTIONS 
     
        function handlemainquest(event){
            let mainquest
            mainquest = event.target.value
            sessionStorage.setItem('mainquest',mainquest)
        }


// HANDLING ADD QUESTION PART AND FUNCTIONS 

function addQuestion(){
    quest.question =sessionStorage.getItem('mainquest')
    questLog.push(quest)
    sessionStorage.removeItem('mainquest')
    let checkLog =sessionStorage.getItem('questionLog')
    if (!checkLog){
        let quets = JSON.stringify(questLog)
        sessionStorage.setItem('questionLog',quets)
    }
    else{
        if (!question) return
        let getLog = sessionStorage.getItem('questionLog')
        getLog=JSON.parse(getLog)
       let queest = [...getLog,...questLog]
        let quets = JSON.stringify(queest)
        sessionStorage.setItem('questionLog',quets)
    }
    
}



// HANDLING SETTING TIME AND FUNCTIONS 

    function handletimer(event,type){
        if (type == 'course'){
            timer.course = event.target.value
        } 
        else if (type == 'time'){
            timer.time = event.target.value
        }
        else if (type == 'type'){
            timer.type = event.target.value
        }
    }

    function settimmer (){
        let stafEmail = sessionStorage.getItem('staffemail')
        stafEmail = JSON.parse(stafEmail)
        timer.staffEmail = stafEmail 
        let quets = JSON.stringify(timer)
        sessionStorage.setItem('timer',quets)
    }

// HANDLING SENDING FUNCTION TO DATABASE 

 async function saveQuestionDB(){
     let ttimer =  sessionStorage.getItem('timer')
     ttimer = JSON.parse(ttimer)
    let getQuestion =  sessionStorage.getItem('questionLog')
    getQuestion = JSON.parse(getQuestion)
    getQuestion = [...getQuestion,ttimer]
    await axios. post('http://localhost:2009/getInfo/staff/question',{getQuestion}).then(res=>{
       
    if (res.data){
        sessionStorage.removeItem('questionLog')
        sessionStorage.removeItem('timer')
    }
     })
 }

// HANDLING SAVED TEST AND FUNCTIONS 

   async function checkSavedTest(){
    

         if (gotopage== 'questionpage'){
            setpage('savedquestn')
            await axios. get('http://localhost:2009/getInfo/staff/pastquestion').then(res=>{
       
        handlesavedQuestn(res.data)
         })
         } 
         else{
            setpage('questionpage')
         }
    }

    // HANDLING PAGE RENDERING 




    return(
        <>
        <div>
        { gotopage=='questionpage'? <div>        
                <button onClick={checkSavedTest} >Saved test</button> <br/>
            <h3> select course</h3>
        <select onChange={e=>handletimer(e,'course')}>
            <option disabled>choose a course</option>
            {
              courselist.length >0?  courselist.forEach((info,i)=>{
                    return <option key={i}>{info}</option>
                }): <option>No course</option>
            }
        </select> <br/> <br/>
       
            <input placeholder="input question type" onChange={e=>handletimer(e,'type')}/> <br/><br/>
            <label>Input duration in minutes (e.g. 1hr = 60minutes )</label> <br/>
            <input  type="number" min="0" onChange={e=>handletimer(e,'time')}/> <button onClick={settimmer}>Set</button><br/><br/>
            <textarea  className="question" placeholder="type question" onChange={e=>handlemainquest(e)}></textarea><br/><br/>

            <select onChange={e=>questiontype(e,'questiontype')}>
                <option value='no-options'> No-Options </option>
                <option value="Options">Options</option>
                <option value="Multiple-Options" >Multiple Options</option>
            </select>
          
            {
            chosenOpt == 'Options' ?<div>
                <p>Options:- Question that requires just a single option to be selected </p>
                <textarea  placeholder="option A"  className="option"  onChange={e=>handleaddquestionevent(e,'optA')}></textarea>
                <textarea  placeholder="option B"   className="option"  onChange={e=>handleaddquestionevent(e,'optB')}></textarea><br/>
                <textarea  placeholder="option C"   className="option"  onChange={e=>handleaddquestionevent(e,'optC')}></textarea>
                <textarea  placeholder="option E"   className="option"  onChange={e=>handleaddquestionevent(e,'optD')}></textarea><br/>
            </div>:
            <div></div>
            }{
            chosenOpt == 'Multiple-Options' ? 
            <div>
                <p>Multiple options:- Question that requires selecting more than a single option</p>
                <br/>
            <textarea  placeholder="option A"       className="option"  onChange={e=>handleaddquestionevent(e,'MoptA')}></textarea>
                <textarea  placeholder="option B"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptB')}></textarea><br/>
                <textarea  placeholder="option C"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptC')}></textarea>
                <textarea  placeholder="option D"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptD')}></textarea><br/>
                <textarea  placeholder="option E"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptE')}></textarea>
                <textarea  placeholder="option F"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptF')}></textarea><br/>
                <textarea  placeholder="option G"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptG')}></textarea>
                <textarea  placeholder="option H"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptH')}></textarea><br/>
                <textarea  placeholder="option I"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptI')}></textarea>
                <textarea  placeholder="option J"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptJ')}></textarea><br/>
                <textarea  placeholder="option K"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptK')}></textarea>
                <textarea  placeholder="option L"   className="option"  onChange={e=>handleaddquestionevent(e,'MoptL')}></textarea><br/>
            </div>:<div></div> }
                <br/><br/>
            <button onClick={addQuestion}>ADD QUESTION</button>
            <button onClick={saveQuestionDB}>SAVE QUESTION</button>

  
            </div>: <div>
                <button onClick={checkSavedTest}>BACK</button> <br/>
                <h4> Saved test</h4>
                <table border="2px solid black">
                    <tr>
                        <th>S/N</th>
                        <th>COURSE CODE</th>
                        <th>COURSE TYPE</th>
                        <th>DURATION</th>
                        <th>MAKE ACTIVE</th>
                        <th>DEACTIVATE</th>
                        <th>DELETE</th>
                    </tr>
                    {
                        savedQuestion.forEach((info,i)=>{
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{info.questncode}</td>
                                <td>{info.questntype}</td>
                                <td>{info.questntime}</td>
                                <td><button>ACTIVATE</button></td>
                                <td><button>DEACTIVATE</button></td>
                                <td><button>DELETE</button></td>
                            </tr>
                        })
                    }

                </table>
            </div>
          
}
</div>
        </>
    )
}

export default SetQuestion