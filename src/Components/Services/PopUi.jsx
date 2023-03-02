import React, { useState } from "react";
import axios from "axios";

const PopUi = ({ close, word }) => {
  const [inputPop, setInputPop] = useState({
    Name: "",
    Email: "",
    Contact: "",
    Description: "Sub : I am interested in your " + word + " Service",
  });

  const handleChangePop = (e) => {
    const { name, value } = e.target;
    setInputPop((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmitPop = (e) => {
    e.preventDefault();
    // alert('We have got your response. We will get back to you soon.')
    if (window.Email) {
      window.Email.send({
        SecureToken: "a11edd24-b11c-4e5e-8898-4145066748b7",
        To: "hello@slogan.media",
        From: "aniketdas773@gmail.com",
        Subject: "Slogan Media",
        Body: `Dear Team, We got a response from ${inputPop.Name} with contact information (${inputPop.Email} & ${inputPop.Contact}) and along some description (${inputPop.Description}) through our website. Please approach the client as soon as possible.`,
      }).then((message) =>
        alert("We have got your response. We will get back to you soon.")
      );
    }
    // const newNote={
    //     Name:inputPop.Name,
    //     Email:inputPop.Email,
    //     Contact:inputPop.Contact,
    //     Description:inputPop.Description,
    // }
    // axios.post("https://slogan.media/create",newNote)
  };
  return (
    <>
      <div className="modal">
        <div className="modal-img">
          <img src="img/emoji.gif" alt="" />
        </div>
        <button className="close" onClick={close}>
          &times;
        </button>

        <div className="digital-contact-heading">
          <h1 className="section-header">
            We are happy to see you are serious about working with us
          </h1>
          <p className="section-para">
            We will get back to you as soon as possible
          </p>
        </div>

        <div className="contact-wrapper">
          <form
            id="contact-form"
            // className="form-horizontal" role="form"
          >
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  onChange={handleChangePop}
                  value={inputPop.Name}
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  name="Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  onChange={handleChangePop}
                  value={inputPop.Email}
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                  name="Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="tel"
                  onChange={handleChangePop}
                  value={inputPop.Contact}
                  className="form-control"
                  id="phone"
                  placeholder="Enter your mobile number"
                  name="Contact"
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              value={"Sub : I am interested in your " + word + " Service"}
              name="Description"
              required
            ></textarea>

            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              onClick={handleSubmitPop}
            >
              <div className="alt-send-button">
                <span className="send-text">Submit</span>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <img
              className="digital-form-img"
              src="img/digital-media/slogan-vector.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUi;
