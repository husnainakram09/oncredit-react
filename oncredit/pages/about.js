import { WebLayout } from "@/components/Layout";
import React from "react";

const AboutUs = () => {
  return (
    <WebLayout>
      <div className="about-us-main">
        <div className="main-about-sec">
          <div className="inner-about-sec">
            <h1>ABOUT US</h1>
            <p>
              On Credit is the One-click credit system using three-factor
              authentication will offer an account for every user in which the
              ledger keeps maintained. It is the one-time setup customers need
              to manually setup the standing order at the bank. We are using
              direct debit method, in direct debit the customer will give our
              organization the authority to take funds from their bank account.
              The service provider or seller who receives the payment would
              initiate each payment.
              <br />
              <br />
              With the growth of internet businesses, the need for safe and
              secure payment platforms have also risen. There can be many
              defaulters that can take the product and later don’t pay.
              Initially, an identification with the user’s account can be made.
              The limit for a particular user may also be set. It is useful for
              the service provider or seller to prevent from defaulters. The
              service provider or seller who receives the payment would initiate
              each payment.
            </p>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default AboutUs;
