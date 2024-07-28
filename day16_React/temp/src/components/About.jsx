import React from 'react'
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt="" />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate accusantium tenetur laboriosam aspernatur non incidunt eligendi atque, fuga eius. Sunt fugiat placeat error nobis animi minus harum dolores tempora odio ad? Aliquam voluptates, illo at autem eos doloremque, placeat magnam dolorem deserunt dolore, ad aliquid eius! Eligendi, ad unde?</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About