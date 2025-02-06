import * as React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Link from './components/Link';
// import { TabItem } from './types';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import * as React from 'react'

// interface FormInputValues {
//   title: string;
//   link: string;
// }

// type Tab = {
//   title: string;
//   link: string;
// }
import { BrowserRouter } from 'react-router-dom';

// const App2 = () => <div>Hello React App from scratch</div>;

const  App = ()  => {
  const [newTab, setNewTab] = React.useState("")
  const [newLink, setNewLink] = React.useState("")
  // const [newEntry, setNewEntry] = React.useState([]);
    // const [count, setCount] = React.useState(0)

  function handleSubmit(){
    // e.preventDefault() //prevents page from refreshing

  var formInputs = {
    title: newTab,
    link: newLink,
  };


    // setNewEntry([...newEntry, newTab, newLink]);

    var arrayLocalstorage = JSON.parse(localStorage.getItem('formInputs') || '[]');
    arrayLocalstorage.push(formInputs)

  localStorage.setItem('formInputs', JSON.stringify(arrayLocalstorage));

  alert('Form values submitted to localstorage.')
  
}



// React.useEffect(() => { //update the ;oncancel;storage whenever the newEntry array changes
//   localStorage.setItem('newEntry', JSON.stringify(newEntry));
//   },
// [newEntry]);
// const formInputs: never[] = [];
// localStorage.push(formInputs);
// var tabList = localStorage.getItem("formInputs");
// JSON.parse(localStorage.getItem("formInputs") as string);
// var regularLists = JSON.parse(tabList);
// window.localStorage.getItem('formInputs')
const list = localStorage.getItem('formInputs')
console.log(list)
const regularLists = JSON.parse(localStorage.getItem('formInputs') || '{}')
  return (
    <BrowserRouter>
    
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1 className="header">Multi Tab Browser</h1>
      <p>Please enter a title and link into the entry fields below,<span><br></br></span> 
        then press the 'Add' button to add a new tab to the page.</p>
      <div className="App">
      <header className="App-header">

        <form className='new-tab-form' onSubmit={handleSubmit}>
          <div className='tab-form-row'>
            <label id="entryTitle">Enter Title:</label>
            <span> </span>
            <input type="text" value={newTab} onChange={e => setNewTab(e.target.value)} id="entryTitle" placeholder='Please enter tab title here.'></input>
            <span> </span>
            <label id="entryLink" >Enter Link:</label>
            <span> </span>
            <input type="text" value={newLink} onChange={e => setNewLink(e.target.value)} id="entryLink" placeholder='Please enter tab link here.'></input>
          </div>
          {/* <p>Press the 'Add' button to add a new tab.</p> */}
          <br></br>
        <button className='btn'>Add</button>
        </form>

        
        <ul className="tabList">
          {/* {list} */}
            {

              regularLists.map((regularList: any, index: any) => (
                <li key={index}>
                  <label id="tabTitle">{regularList.title}</label>
                  {/* <input type="text" value={regularList.title} id="tabTitle" placeholder='Please enter tab title here.'></input> */}
                  <br></br>
                  <iframe src={regularList.link}></iframe>
                  <br></br>
                  <button className="closeButton">CLOSE</button>
                </li>
              ))} 


          {/* {           
         localStorage.getItem("formInputs")
  } */}
 
 
        </ul>
        

        {/* { <Link href="https://reactjs.org" targetBlank>Learn React</Link> targetBlank is true by default } */}
      </header>
    </div>

    </BrowserRouter>
  )
}

export default App
