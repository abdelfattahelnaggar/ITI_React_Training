import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form action="">
        <input type="text" placeholder='Enter Your Name' required />
        <input type="email" placeholder='Enter your Email' required />
        <textarea name="message" placeholder='Write Here...'></textarea>
        <input type="submit" value='Send'/>
      </form>
    </div>
  )
}

export default Contact