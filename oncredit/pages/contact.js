import { WebLayout } from "@/components/Layout";
import React from "react";
import { Stack } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <WebLayout>
      <div className="main">
        <Stack justify="center" h="100%">
          <div className="contact-main">
            <div className="contact-form">
              <div>
                <div className="form-heading">
                  <h2>WRITE US</h2>
                </div>
                <div className="contact-place">
                  <form>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      type="name"
                      placeholder="Enter your name..."
                      id="name"
                      pattern="[A-Za-z]"
                    />
                    <br />
                    <label htmlFor="Email">Email</label>
                    <br />
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      id="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      title="Invalid email address"
                    />
                    <br />
                    <label htmlFor="comment" id="comment">
                      <b>COMMENTS</b>
                    </label>
                    <br />
                    <textarea
                      name="message"
                      cols={30}
                      rows={10}
                      defaultValue={""}
                    />
                    <br />
                    <button type="submit" id="submit">
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div>
                <img
                  src="./../img/Contact-us-pana.png"
                  alt="contact"
                  width="500px"
                />
              </div>
            </div>
          </div>
        </Stack>
      </div>
    </WebLayout>
  );
};

export default ContactUs;
