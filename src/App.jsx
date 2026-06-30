import React, { useState } from "react";

const App = () => {

  const [Title, setTitle] = useState('') 
  const [Details, setDetails] = useState('')
  const [task, settask] = useState([])

  const Submit = (elem) => {
    elem.preventDefault();
    const copyTask=[...task]
    copyTask.push({Title,Details})
    settask(copyTask)
    setTitle('')
    setDetails('')
    
    
  };

  const deleteTask=(index)=>{
    const copyTask=[...task]
    copyTask.splice(index,1)
    settask(copyTask)
    
  };
  return (
    <div className="h-screen bg-black text-white  lg:flex">
      <form
        onSubmit={(elem) => {
          Submit(elem);
        }}
        className="flex items-start lg:w-1/2 gap-5 p-10 flex-col"
      >
        {/* first input for heading  */}
        <input
          value={Title}
          onChange={
           (e)=>{
           setTitle(e.target.value)
           
           }
          }
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2  w-full border-2 rounded outline-none font-medium"
        />

        {/* detailed input */}
        <textarea
        value={Details}
        onChange={(elem)=>{
          setDetails(elem.target.value)
        }}  
          type="text"
          placeholder="write details"
          className="font-medium flex items-start px-5 py-2 border-2  rounded h-25 w-full outline-none"
        />
        <button className="active:bg-gray-600 active:scale-95 font-medium p-6 py-2 w-full border-2 rounded bg-amber-50 text-black outline-none">
          Add Note
        </button>
      </form>
      <div className=" bg-black border-l-amber-100 lg:border-l-4 lg:w-1/2 p-10 ">
      
        <h3 className="text-3xl font bold">Recent Notes</h3>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[95%] overflow-auto">
       {
        task.map(
          (elem , index)=>{
            return <div key={index} className=" relative h-60  bg-[url('/sticky.jpg')] bg-cover rounded-4xl w-50  text-black p-4">
              <h2 onClick={
                ()=>{
                  deleteTask(index)
                }
              }  className="absolute cursor-pointer active:scale-95 top-5 right-5 bg-red-600 px-2 py-1 rounded-full text-xs">X</h2>
              <h3 className="leading-tight font-bold text-2xl">{elem.Title}</h3>
              <p className="mt-2 leading-tight font-medium text-gray-600">{elem.Details}</p>
            </div>
          }
        )
       }
          

        </div>
      </div>
    </div>
  );
};

export default App;
