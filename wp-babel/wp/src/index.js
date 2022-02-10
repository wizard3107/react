// // comment
// import add, { mul, sub } from './funcs'
//   let obj ={};
// let l1 =5;
// console.log(add(1, 2));
// console.log(sub(l1,4));
// console.log(mul(4,4));
import './index.css'
import  ReactDOM  from 'react-dom'
import React from 'react' 
// const i =React.createElement("i",{
//     className:"italicText"
// },
// "Itallic Text")
// const h1= React.createElement("h1",{id:"abcd",
// className:"colorForH1"},
// ["Hello WebPpack React",i]);
ReactDOM.render(
    <h1 className='colorForH1'>
        Hello WebPack React
        <i className='italicText'>Ittalic Text</i>
    </h1>,
    document.getElementById("root") //where
);

// let h1 = document.createElement("h1");
// h1.innerText="hello webPack";
// h1.classList.add("colorForH1");
// document.getElementById("root").appendChild(h1);