import "./contact.scss"
import { useState } from "react";

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className='contact' id="contact">
      <div className="left">
        <p>© Truong Ha Vu. All Rights Reseved.</p>
      </div>
      <div className="right">
        <h1>Get In Touch</h1>
        <p>vutruong1772@gmail.com</p>
        <ul className="contactLink">
          <li>Linkedln</li>
          <li>Github</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>
      
    </div>
  )
}
