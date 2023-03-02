import React, { useState } from "react";
import "./DigitalContact.css";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

const DigitalContact = () => {
  // const [input,setInput]=useState({
  //     Name:'',
  //     Email:'',
  //     Contact:'',
  //     Description:''
  // })

  // const handleChange=(e) => {
  //     const {name,value} = e.target;
  //     setInput(prevInput=>{
  //         return{
  //             ...prevInput,
  //             [name]:value
  //         }
  //     })
  // }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cont, setCont] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('We have got your response. We will get back to you soon.')

    if (window.Email) {
      window.Email.send({
        SecureToken: "a11edd24-b11c-4e5e-8898-4145066748b7",
        To: "hello@slogan.media",
        From: "aniketdas773@gmail.com",
        Subject: "Slogan Media",
        Body: `Dear Team, We got a response from ${name} with contact information (${email} & ${cont}) and along some description (${desc}) through our website. Please approach the client as soon as possible.`,
      }).then((message) =>
        alert("We have got your response. We will get back to you soon.")
      );
    }
    // const newNote={
    //     Name:input.Name,
    //     Email:input.Email,
    //     Contact:'',
    //     Description:input.Description,
    // }
    // axios.post("https://slogan.media/create",newNote)
  };

  return (
    <div className="digital-contact">
      <h1 className="digital-contact-title">
        Talk to our strategist to learn more
      </h1>
      <section id="contact">
        <div className="digital-contact-heading">
          <h1 className="section-header">Get In Touch</h1>
          <p className="section-para">We are here for you! How can we help?</p>
        </div>

        <div className="contact-wrapper">
          {/* <!-- Left contact page --> */}

          <form
            id="contact-form"
            // action="/digital" method="POST"
            // className="form-horizontal" role="form"
          >
            <div className="form-group">
              <div className="col-sm-12">
                {/* <input type="text" onChange={handleChange} value={input.Name} className="form-control" id="name" placeholder="Enter your name" name="Name" required /> */}
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  name="Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                {/* <input type="email" onChange={handleChange} value={input.Email} className="form-control" id="email" placeholder="Enter your email address" name="Email" required /> */}
                <input
                  type="number"
                  className="form-control"
                  id="email"
                  onChange={(e) => setCont(e.target.value)}
                  placeholder="Enter your contact number"
                  name="Contact"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                {/* <input type="email" onChange={handleChange} value={input.Email} className="form-control" id="email" placeholder="Enter your email address" name="Email" required /> */}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  name="Email"
                  required
                />
              </div>
            </div>

            {/* <textarea className="form-control" onChange={handleChange} value={input.Description} rows="10" placeholder="Go ahead, We are listening..." name="Description" required></textarea> */}
            <textarea
              className="form-control"
              onChange={(e) => setDesc(e.target.value)}
              rows="10"
              placeholder="Go ahead, We are listening..."
              name="Description"
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              onClick={handleSubmit}
            >
              <div className="alt-send-button">
                <span className="send-text">Submit</span>
              </div>
            </button>
          </form>

          {/* <!-- Left contact page --> */}

          <div className="direct-contact-container">
            <img
              className="digital-form-img"
              src="img/digital-media/slogan-vector.png"
              alt=""
            />

            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">+91 70039 64486</span>
                </i>
              </li>

              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">hello@slogan.media</span>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalContact;
