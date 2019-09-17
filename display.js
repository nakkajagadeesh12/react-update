import React from 'react'

const Display = ({ history, location }) => {
  const ar = [{ id: 1, version: "16.8", data: { id: 2, name: 'Bhaskar', technology: "react" } }];
  return (
    <div>
      {
        ar.map(item => {
          console.log(Object.entries(ar), "entries")
        })
      }
    </div>
  )
}

export default Display;


// {
//   ar.map(item => {
//     return (
//       <div>{
//         Object.keys(item).map(key => {
//           return <div>{key === 'data' ?
//             Object.keys(item[key]).map(k => {
//               console.log(k, "k");
//               return <div>{item[key][k]}</div>
//             })
//             : item[key]}</div>
//         })
//       }
//       </div>
//     )
//   })
// }