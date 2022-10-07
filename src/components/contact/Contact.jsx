import React, { useRef } from "react"
import { BsWhatsapp } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import "./contact.css"
import emailjs from "emailjs-com"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  const showToastMessage = () => {
    toast.success("Message Sent Successfully 👍", {
      position: toast.POSITION.TOP_RIGHT,
    })
  }
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm(
      "service_7be7sen",
      "template_4vp18vm",
      form.current,
      "user_FW6mkorAhkkc93l8HYiAD"
    )

    showToastMessage()

    e.target.reset()
  }

  return (
    <section id="contact">
      <ToastContainer />
      <h5>Lets Connect</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>deleoyeroifeoluwa@gmail.com</h5>
            <a
              href="mailto:deleoyeroifeoluwa@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send me a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Dele-Oyero Ifeoluwa</h5>
            <a href="https://m.me/oyero.ife" target="_blank" rel="noreferrer">
              Send me a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2348146917848</h5>
            <a
              href="https://wa.me/2348146917848"
              target="_blank"
              rel="noreferrer"
            >
              Send me a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
