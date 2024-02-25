import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="login-wrapper">
      <div className="login-content-container">
        <img className="login-content__h-wave" src="/wave-h.svg" />
        <div className="login-content-background">
          <img className="login-content__v-wave" src="/wave.svg" />
          <div className="login-box">
            <img
              className="login-box__logo"
              src="/turion-logo.svg"
              alt="logo da Turion Analysis System"
            />
            <Form />
            <div className="login-box-footer">
              <img
                className="login-box-footer__logo"
                src="/logo-doptex.png"
                alt="logo da Doptex"
              />
              <p className="login-box-footer__text">
                © 2019-2024 Turion Analysis System
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="login-illustrations">
        <img
          className="login-illustrations_logo"
          src="/turion-hit-the-target.svg"
          alt="logo da Turion junto da frase: soluções inteligentes para a gestão do seu negócio"
        />
        <img className="login-illustrations_map" src="/map.svg" />
        <img className="login-illustrations_city" src="/city.svg" />
      </div>
    </div>
  );
}

export default App;
