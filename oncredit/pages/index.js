// import { Inter } from "@next/font/google";
import { WebLayout } from "@/components/Layout";
import { Stack } from "@chakra-ui/react";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <WebLayout>
        <div className="main">
          <Stack justify={"center"} className="inner-main">
            <div className="content">
              <h1 style={{ margin: 0 }}>
                Secure Credit
                <br />
                <span>3-Factor Auth</span> <br />
                Stegano
              </h1>
              <p className="par">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                neque expedita atque eveniet quis nesciunt. Quos nulla vero
                consequuntur, fugit nemo ad delectus a quae totam ipsa illum
                minus laudantium?
              </p>
              <button className="cn">
                <a href="./pages/signup.html">JOIN US</a>
              </button>
              {/* <div class="form">
                <h2>Login Here</h2>
                <input type="email" name="email" placeholder="Enter Email Here">
                <input type="password" name="" placeholder="Enter Password Here">
                <button class="btnn"><a href="#">Login</a></button>
                <p class="link">Don't have an account<br>
                    <a href="./pages/signup.html">Sign up </a> here</a>
                </p>
                <p class="liw">Log in with</p>
                <div class="icons">
                    <a id="fc" href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a id="in" href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a id="tw" href="#">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a id="go" href="#">
                        <ion-icon name="logo-google"></ion-icon>
                    </a>
                    <a id="sk" href="#">
                        <ion-icon name="logo-skype"></ion-icon>
                    </a>
                </div>
            </div> */}
            </div>
          </Stack>
        </div>

        <section className="services" style={{ backgroundColor: "white" }}>
          <div className="container">
            <div className="services-title">
              <div className="title">
                <h2>
                  <span> Our </span> Services
                </h2>
              </div>
            </div>
            <div className="services-box">
              <div className="box">
                <div className="ser-box">
                  <div className="icon">
                    <img src="img/setting.png" />
                  </div>
                  <h4>Account Setup</h4>
                  <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
              </div>
              <div className="box">
                <div className="ser-box">
                  <div className="icon">
                    <img src="img/speed.png" />
                  </div>
                  <h4>Preformance</h4>
                  <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
              </div>
              <div className="box">
                <div className="ser-box">
                  <div className="icon">
                    <img src="img/protect.png" />
                  </div>
                  <h4>Privacy Protected</h4>
                  <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
              </div>
              <div className="box">
                <div className="ser-box">
                  <div className="icon">
                    <img src="img/backup.png" />
                  </div>
                  <h4>Ledger Maintenance</h4>
                  <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
              </div>
              <div className="box">
                <div className="ser-box">
                  <div className="icon">
                    <img src="img/freessl.png" />
                  </div>
                  <h4>3Factor Authentication</h4>
                  <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
              </div>
              <div className="box">
                <div className="ser-box">
                  <div className="icon">
                    <img src="img/database.png" />
                  </div>
                  <h4>DataProtection</h4>
                  <p>Lorem Ipsum is simply dummy and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </WebLayout>
    </>
  );
}
