"use client"
import React, { useEffect, useRef } from 'react'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const form = useRef(); 


  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.elements.from_name.value;
    const email = form.current.elements.email_id.value;
    const message = form.current.elements.message.value;

    if (!name || !email || !message) {
      // Notify the user that the form is incomplete
      toast.error('Please fill in all the fields.');
      return;
    }

    emailjs.sendForm('service_ct55m5j', 'template_hzo7pam', form.current, '_IIrUMrBB8zFIgQK7') 
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message successfully sent!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Message failed to send.');
        }
      );
  };

  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <>
      <div name='contact' className='w-full  h-screen flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold  text-white'>Support</p>
            <p className='text-white py-4'>If you have any questions sumbit the form below:</p>
          </div>
          <input className=' bg-transparent p-2 border-2 rounded-xl border-[#00df9a] text-white' type="text" placeholder='Name *' name='from_name' />
          <input className='my-4 p-2 border-2 border-[#00df9a] rounded-xl bg-transparent text-white' type="email" placeholder='Email *' name='email_id' />
          <textarea className=' p-2 border-2 border-[#00df9a] rounded-xl bg-transparent text-white' name="message" rows="10" placeholder='Message *'></textarea>
          <button type="submit" value="Send" className='text-black duration-300 font-medium  bg-[#00df9a] rounded-xl hover:bg-gray-700 hover:text-[#00df9a] px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactPage;