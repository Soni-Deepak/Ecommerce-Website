// import React, { useState } from 'react'

// const Gretting = ({name , age}) => {
//   return (
//   <h1> Hii my name is {name} and My Age is {age}</h1>
//   )
// }

// const App = () => {
//   // let showGreeting = false;
//   const [showGreeting, setShowGreeting ] = useState(false)
//   function toggleGreeting() {
//     // if (showGreeting) {   // It change the true/false but it does not rerender so we use useState (The whole component should rerender)
//     //   // showGreeting = false ;
//     //   setShowGreeting(false)
//     // } else {
//     //   // showGreeting = true ;
//     //   setShowGreeting(true)
//     // }

//     setShowGreeting(!showGreeting); //  IT IS SAME AS UPPER IF-ELSE 

//   }
//   return (
//     <div>
//       {/* {showGreeting && < Gretting name = {"Pritam"} age = {24} />} */}

//       <button onClick={toggleGreeting} >Click Me</button>
//       {showGreeting && (
//         < Gretting name = {"Pritam"} age = {24} />
//         )
//        }
//     </div>
//   )
// }

// // Component = Function that returns JSX

// export default App


import React from 'react'
import SignUpForm from './components/SignUpForm'

const App = () => {
  return (
    <div>
      <SignUpForm />
    </div>
  )
}

export default App
