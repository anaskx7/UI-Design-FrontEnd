import React, { useState,useEffect } from "react";

const App = () => {
  const [headText, setheadText] = useState("");
  const [detailsText, setdetailsText] = useState("");
  const [Tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem("Tasks");
    return savedTasks ? JSON.parse(savedTasks):[];
  });
useEffect(()=>{
    localStorage.setItem("Tasks",JSON.stringify(Tasks));
},[Tasks]);

  const sumbitHandler=(e)=>{
    e.preventDefault();
   const copyTask=[...Tasks];
   copyTask.push({headText,detailsText});
   setTasks(copyTask);


  setheadText("");
  setdetailsText("");
  }
  const deleteNotes=(idx)=>{
    const copyTask = [...Tasks];
    copyTask.splice(idx,1);
    setTasks(copyTask);

  }

  return (
    <div className='h-screen  overflow-auto bg-gray-700 p-5'>
       <div className='flex flex-row justify-center items-center '>
      <img id="display"   src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="img" />
      <h1  id="header"
      className='text-center font-bold font-mono text-amber-100'>
        Awesome Notes</h1>
       </div>
      <div className="flex flex-col items-center">
       
        <form onSubmit={(e)=>{
          sumbitHandler(e);
        }} className='flex flex-col gap-2 p-10 w-full h-full '>
        <input 
        type="text" 
        placeholder='Enter Notes Heading..'
        maxLength={30}
        value={headText}
        onChange={(e)=>{
          setheadText(e.target.value);
        }}
        className='w-1/2 h-15 rounded-2xl px-6 py-2 border-2 border-amber-200 outline-none font-mono text-gray-100 border-r-0  text-2xl'
         />
        <textarea  placeholder='Enter Notes here....'
        value={detailsText}
        maxLength={700}
        onChange={(e)=>{
          setdetailsText(e.target.value)
        }}
        
        className='flex flex-row items-start justify-start rounded-2xl  px-4 py-2  border-2 border-amber-200 outline-none font-mono h-40 w-full text-xl text-gray-300 rounded-br-none'></textarea>
        <button
        className='bg-amber-100 text-xl text-black rounded-2xl px-4 py-2 font-bold w-fit active:scale-95 hover:bg-blue-400'>Add Notes</button>
      </form>
      </div>
      <div className='uppercase my-1 border-t border-amber-100'>
        <h1 className=' font-mono font-bold text-3xl text-center text-amber-100'> Recent Notes</h1>
        </div>
      <div className='flex flex-row gap-2  flex-wrap'>
        {Tasks.map((ele,idx)=>{
          if(ele.headText !== '' || ele.detailsText !== ''){
          return(
           <div key={idx} className='bg-cover h-fit w-60 mix-blend-color-multiply  
           bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]
           text-center  rounded-2xl p-4'>
          
            <h2 className='text-black text-lg font-bold pt-10  '>{ele.headText}</h2>
             <p className='text-gray-500/90 text-sm font-semibold leading-tight  mt-2 '>{ele.detailsText}</p>
             <button onClick={()=>{
                deleteNotes(idx);
             }} className='bg-red-500 my-2 p-2 rounded-2xl text-sm hover:bg-red-600 hover:font-bold ' >Delete Notes</button>
            </div>
          );}else{
            return(
          <div key={idx} className='  bg-cover h-fit w-50 bg-amber-100 text-center  rounded-2xl p-4 font-sans'>
             <p className='text-black  font-bold leading-tight  animate-bounce'>Empty note</p>
             <button  onClick={()=>{
               deleteNotes(idx);
             }} 
             className='bg-red-400 px-4 rounded-2xl active:scale-95 hover:bg-red-500' >OK</button>
              </div>
            )

          }
        })}
      </div>
      <br />
     
    </div>
  )
}

export default App
