import { WebLayout } from "@/components/Layout";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FormikProps, Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
const Signup = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    const date = new Date();
    fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...e,
        date: date.toLocaleDateString(),
        isVerified: false,
        img: "https://xsgames.co/randomusers/avatar.php?g=male",
      }),
    })
      .then(async (res) => {
        alert("account created!");
        router.push("login");
        // window.location.replace(
        //   "http://127.0.0.1:5500/onCredit-WebApp/pages/login.html"
        // );
        const data = await res.json();
        console.log(data);
      })
      .catch((err) => console.log("err", err));
  };
  return (
    <WebLayout>
      <div className="main-signup">
        <div className="signup-main">
          <div className="signup-form">
            <div>
              <img src="./../img/Login-rafiki.png" alt="signup" width="700px" />
            </div>
            <div>
              <div className="signup-form-heading">
                <h2>
                  WELCOME! <br />
                  SIGN UP HERE.
                </h2>
              </div>
              <div className="signup-place">
                <Formik initialValues={{}} onSubmit={(e) => handleSubmit(e)}>
                  {(props) => (
                    <Form>
                      <label htmlFor="First Name">Full Name</label>
                      <br />
                      <Field name="f_name">
                        {({ field, form, meta }) => (
                          <input
                            {...field}
                            type="text"
                            placeholder="Enter your Full Name..."
                            pattern="[A-Za-z]{1,32}"
                            // id="f_name"
                            // required
                          />
                        )}
                      </Field>
                      <label htmlFor="phone No.">Phone No.</label>
                      <br />
                      <Field name="phone">
                        {({ field, form, meta }) => (
                          <input
                            {...field}
                            type="tel"
                            placeholder="Enter your phone No...."
                            pattern="03[0-9]{9}"
                            title="e.g 03123456789"
                            // id="phone"
                            // required
                          />
                        )}
                      </Field>
                      <br />
                      <label htmlFor="Email">Email</label>
                      <br />
                      <Field name="email">
                        {({ field, form, meta }) => (
                          <input
                            {...field}
                            type="email"
                            // id="email"s
                            placeholder="Enter your email..."
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            // required
                          />
                        )}
                      </Field>
                      <br />
                      <label htmlFor="Password">Password</label>
                      <br />
                      <Field name="password">
                        {({ field, form, meta }) => (
                          <input
                            {...field}
                            type="password"
                            // id="password"
                            placeholder="Enter your password......."
                            // pattern="\S{8,32}"
                            // required
                          />
                        )}
                      </Field>
                      <br />
                      <label htmlFor="role">Role: </label>
                      <br />
                      <Field name="role">
                        {({ field, form, meta }) => (
                          <select required {...field}>
                            <option value>Select Your Role</option>
                            <option value="customer">Customer</option>
                            <option value="Seller">Seller</option>
                          </select>
                        )}
                      </Field>
                      <label htmlFor="address">Address: </label>
                      <br />
                      <Field name="address">
                        {({ field, form, meta }) => (
                          <input
                            {...field}
                            type="text"
                            // id="password"
                            placeholder="Enter your address"
                            // pattern="\S{8,32}"
                            required
                          />
                        )}
                      </Field>
                      <div className="btn">
                        <button type="submit" id="submit">
                          SIGN UP
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <div>
                <Text color={"black"}>
                  Already have an account?
                  <Link href={"/login"}>Log In</Link>
                  here!
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Signup;
