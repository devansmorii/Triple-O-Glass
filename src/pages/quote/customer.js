import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./style/customer.css"

const Customer = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_q390lud', 'template_1ip2igh', form.current, 'rGRbpw0ylICW_IczQ')
          .then(() => {
              alert("An email confirmation has been sent successfully")
              window.location.href = '/receipt';
          }, () => {
              alert("Error in sending email. Please Try Again")
          });
          e.target.reset()
      };
    return (
        <section>
            <div className='customercontainer'>
                <h2 className='title-form'>Customer's Information Form</h2>
                <form ref={form} onSubmit={sendEmail} className='form-card'>
                    <input type="text" placeholder='Full Name or Company Name' name='customer_name' className='customer' required/><br/>
                    <input type="text" placeholder='Email Address' name='customer_email' className='customer' required/><br/>
                    <input type="text" placeholder='Address' name='customer_address' className='customer' required/><br/>
                    <button type="submit" className='submit_btn'>Submit</button><br/>
                </form>
            </div>
        </section>
    )
}

export default Customer