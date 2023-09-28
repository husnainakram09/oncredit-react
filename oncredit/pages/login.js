import { WebLayout } from "@/components/Layout";
import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    console.log(e);
    fetch("http://localhost:4000/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...e,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          // if (res.ok && data[0].role === "customer") {
          localStorage.setItem("user", JSON.stringify(data[0]));
          alert("success");
          router.push(`http://localhost:3001/dashboard}`);
          // router.push(`http://localhost:3001/dashboard/${data[0].role}`);
          //   window.location.replace(
          //     "http://127.0.0.1:5500/onCredit-WebApp/pages/customer.html"
          //   );
          // } else if (res.ok && data[0].role === "Seller") {
          //   localStorage.setItem("user", JSON.stringify(data));
          //   alert("success");
          //   window.location.replace(
          //     "http://127.0.0.1:5500/onCredit-WebApp/pages/seller.html"
          //   );
        } else if (data.length == 0) {
          alert("Incorrect email or password!");
        } else {
          alert("Incorrect email or password!");
        }
        // const data2 =await res.json()
        console.log(data);
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
        alert("Incorrect email or password!");
      });
  };
  return (
    <WebLayout>
      <div className="main-login">
        <Stack justify={"center"} h="100%">
          <div className="login-main">
            <div className="login-form">
              <div>
                <img
                  src="./../img//Login-amico.png"
                  alt="login"
                  width="500px"
                />
              </div>
              <div>
                <div className="form-heading">
                  <h2>
                    WELCOME! <br />
                    LOGIN HERE.
                  </h2>
                </div>
                <div className="login-place">
                  <Formik initialValues={{}} onSubmit={(e) => handleSubmit(e)}>
                    {(props) => (
                      <Form>
                        <label htmlFor="role">Role: </label>
                        <Field name="role">
                          {({ field, form, meta }) => (
                            <select {...field} required>
                              <option value="none">Select Your Role:</option>
                              <option value="customer">Customer</option>
                              <option value="Seller">Seller</option>
                            </select>
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
                              placeholder="Enter your email..."
                              // id="email"
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                              title="Invalid email address"
                              required
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
                              placeholder="Enter your password......."
                              //   id="password"
                              // pattern="\S{8}"
                              title="Please use numbers, letters and special charaters minimum 8"
                              required
                            />
                          )}
                        </Field>
                        <br />
                        <button type="submit" id="submit">
                          LOG IN
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div>
                  <Text color={"black"} fontSize={14}>
                    Don't have an account?
                    <Link href="/signup">Sign Up</Link>
                    here!
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </div>
    </WebLayout>
  );
};

export default Login;
