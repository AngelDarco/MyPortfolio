import "./Contact.scss";
import global from "../../../global.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";
import Message from "../../../components/message/Message";
import Loader from "../../../components/loader/Loader";
import handlerSendMessages from "../../../utils/handlerSendMessages";
import { CursorsStyles } from "darco-cursors";

const Contact = ({ ...props }) => {
  const [messageSend, setMessageSend] = useState(false);
  const [loader, setLoader] = useState(false);
  const [messageResult, setMessageResult] = useState(false);
  const formRef = useRef(null);

  const messages = {
    success: "Hey, thanks for your message!, I will reply as soon as possible",
    error: "Something went wrong, please try again later."
  };

  const handlerSubmit = (e) => {
    if (!formRef.current) return;
    e.preventDefault();
    const data = {
      name: formRef.current.name.value,
      subject: formRef.current.subject.value,
      email: formRef.current.email.value,
      message: formRef.current.message.value
    };

    const URL = "https://darco.vercel.app/api/index";

    // const URL = "http://localhost:3000/api/index";

    if (Object.values(data).length > 4) return;

    setLoader(true);

    handlerSendMessages(URL, data)
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setLoader(false);
          setMessageSend(true);
          setMessageResult(true);
        } else {
          setLoader(false);
          setMessageSend(true);
          setMessageResult(false);
          console.error(data);
        }
      })
      .catch((err) => {
        setLoader(false);
        setMessageSend(true);
        setMessageResult(false);
        console.error(err);
      });
  };

  useEffect(() => {
    let id;
    if (messageSend) {
      id = setTimeout(() => {
        setMessageSend(false);
        setLoader(false);
      }, 5000);
    }
    return () => clearTimeout(id);
  }, [messageSend]);

  return (
    <section
      ref={props.reference}
      {...props}
      className={`contactContainer ${global.containers}`}
    >
      <section id="contact">
        <h1 className="section-header">Contact</h1>
        <div className="contact-wrapper">
          {/* left side */}
          <div className="form">
            {loader && !messageSend ? (
              <Loader />
            ) : !loader && messageSend ? (
              <Message
                type={messageResult ? "success" : "error"}
                message={messageResult ? messages.success : messages.error}
              />
            ) : (
              <form
                id="contact-form"
                className="form-horizontal"
                role="form"
                ref={formRef}
                onSubmit={handlerSubmit}
              >
                <div className="form-group">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      name="name"
                      required
                    ></input>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      name="subject"
                      required
                    ></input>
                  </div>
                </div>

                <textarea
                  className="form-control"
                  rows="10"
                  placeholder="MESSAGE"
                  name="message"
                  required
                ></textarea>

                <div className="form-group">
                  <div className="col-sm-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      name="email"
                      required
                    ></input>
                  </div>
                </div>

                <button
                  className={`btn btn-primary send-button ${CursorsStyles.pointer}`}
                  id="submit"
                  type="submit"
                  value="SEND"
                >
                  <div className="alt-send-button">
                    <i className="fa fa-paper-plane"></i>
                    <span className="send-text">SEND</span>
                  </div>
                </button>
              </form>
            )}
          </div>
          {/* right side */}
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <FaMapMarkerAlt />
                <span className="contact-text place">
                  <a>
                    City, State
                    <p>Trujillo - Peru</p>
                  </a>
                </span>
              </li>

              <li className="list-item">
                <BsLinkedin />
                <span className="contact-text phone">
                  <a
                    href="https://www.linkedin.com/in/angeldarco/"
                    title="find me on linkedin"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                    <p>@angeldarco</p>
                  </a>
                </span>
              </li>

              <li className="list-item">
                <AiFillGithub />
                <span className="contact-text gmail">
                  <a
                    href="https://github.com/AngelDarco/"
                    title="find me on github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                    <p>@angeldarco</p>
                  </a>
                </span>
              </li>
              <li className="list-item">
                <FaFileAlt />
                <span className="contact-text gmail">
                  <a
                    href="https://roxkincxbxsuvs8q.public.blob.vercel-storage.com/AGPresume-ihrsjMOWhSgYBPpxWJr9kD66lBYocR.pdf"
                    target="_blank"
                    title="get my resume"
                    rel="noreferrer"
                  >
                    My Resume
                    <p>download</p>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Contact;
