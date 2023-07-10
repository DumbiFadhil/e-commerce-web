import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_eyb61w8", "template_9x4m2qn", form.current, "4qQBFennI213l6d4b")
      .then((result) => {
        console.log(result.text);
        alert('Form sent successfully');
        window.location.reload();
      }, (error) => {
        console.log(error.text);
        alert('Seems like something went wrong, please try again later');
      });
  };

  return (
    <section className='h-screen'>
      <div className="flex flex-col items-center justify-between">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold">CONTACT US</h2>
          <div className="rounded-full mx-auto bg-slate-700 h-1 w-20 mt-1 mb-4"></div>
          <div className="mt-3 pb-3">
            <h4 className='text-lg font-normal'>Feel free to Contact Us by submitting the form below and I will get back to you as soon as possible</h4>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3 flex items-center">
              <label htmlFor="inputName3" className="w-24">Name</label>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full border border-black px-2"
                  id="inputName3"
                  name="user_name"
                  required
                />
              </div>
            </div>
            <div className="mb-3 flex items-center">
              <label htmlFor="inputEmail3" className="w-24">Email</label>
              <div className="flex-1">
                <input
                  type="email"
                  className="w-full border border-black px-2"
                  id="inputEmail3"
                  name="user_email"
                  required
                />
              </div>
            </div>
            <div className="mb-3 flex items-center">
              <label htmlFor="message" className="w-24">Message</label>
              <div className="flex-1">
                <textarea
                  name="message"
                  id="message"
                  className="w-full"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                className='rounded-lg hover:text-white font-medium bg-slate-700 text-slate-300 w-20 h-10'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
