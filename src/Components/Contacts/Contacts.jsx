import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Contacts/Contacts.css';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
    emailjs.sendForm('service_88fjt7q', 'template_x4xg3bm', form.current,
      'JEB_xuvPOrYaQ0s9l')
      .then((result) => {
        alert(result.text +", Your message sent successfuly");
      }, (error) => {
        alert(error.text);
      });
  };
  return (
    <>
      <div className="container">
        <div className='texts'>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>

        </div>

        <div className="row">
          <div className='column'>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>

        </div>
      </div>
    </>
  )
}
export default Contacts;