import React from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="username_github">Username github</label>
            <input name="username_github" id="username_github" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Techs</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/15326732?s=460&v=4"
                alt="user image"
              />
              <div className="user-info">
                <strong>Gabriel Modesto</strong>
                <span>ReactJS, React Native, PHP</span>
              </div>
            </header>
            <p>Full Stack Developer, Systems Analyst, Clara's Father, Thais' Husband and Rugby Player</p>
            <a href="https://github.com/gabrielrmodesto">Veja o perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/15326732?s=460&v=4"
                alt="user image"
              />
              <div className="user-info">
                <strong>Gabriel Modesto</strong>
                <span>ReactJS, React Native, PHP</span>
              </div>
            </header>
            <p>Full Stack Developer, Systems Analyst, Clara's Father, Thais' Husband and Rugby Player</p>
            <a href="https://github.com/gabrielrmodesto">Veja o perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/15326732?s=460&v=4"
                alt="user image"
              />
              <div className="user-info">
                <strong>Gabriel Modesto</strong>
                <span>ReactJS, React Native, PHP</span>
              </div>
            </header>
            <p>Full Stack Developer, Systems Analyst, Clara's Father, Thais' Husband and Rugby Player</p>
            <a href="https://github.com/gabrielrmodesto">Veja o perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/15326732?s=460&v=4"
                alt="user image"
              />
              <div className="user-info">
                <strong>Gabriel Modesto</strong>
                <span>ReactJS, React Native, PHP</span>
              </div>
            </header>
            <p>Full Stack Developer, Systems Analyst, Clara's Father, Thais' Husband and Rugby Player</p>
            <a href="https://github.com/gabrielrmodesto">Veja o perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
