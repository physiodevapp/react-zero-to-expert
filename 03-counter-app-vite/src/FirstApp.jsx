// import { Fragment } from 'react'

// const getMessage = (message) => {
//   return JSON.stringify(message)
// }

// const newMessage = {
//   text: 'Hola mundo',
//   author: 'Physiodevapp'
// }

export const FirstApp = ( {title, subtitle} ) => {

  // console.log(props)

  return (
    <>
      {/* <code> {JSON.stringify( newMessage)} </code> */}
      {/* <h1>{getMessage(newMessage)}</h1> */}
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  )
}
