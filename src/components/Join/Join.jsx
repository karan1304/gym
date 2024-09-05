import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css'

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h1d83jp', 'template_e596659', form.current, {
        publicKey: '_yi5mDWp3YbJNw-mc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="Join" id="Join">

        <div className="left-j">
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">

           <form action="" ref={form} className="email-container" onSubmit={sendEmail}>

              <input type="email" name="user_email" placeholder='Enter Your Email Address' />
              <button className='btn btn-j'>Join Now</button>
           </form>

        </div>

    </div>
  )
}

export default Join
