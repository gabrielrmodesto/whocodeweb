import React, { useEffect, useState } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
import api from './services/api';

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(event){
    event.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });
    console.log(response.data);
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="username_github">Username github</label>
            <input
              name="username_github"
              id="username_github"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Techs</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
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
                alt="user profile"
              />
              <div className="user-info">
                <strong>Gabriel Modesto</strong>
                <span>ReactJS, React Native, PHP</span>
              </div>
            </header>
            <p>
              Full Stack Developer, Systems Analyst, Clara's Father, Thais'
              Husband and Rugby Player
            </p>
            <a href="https://github.com/gabrielrmodesto">
              Veja o perfil no github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/15326732?s=460&v=4"
                alt="user profile"
              />
              <div className="user-info">
                <strong>Gabriel Modesto</strong>
                <span>ReactJS, React Native, PHP</span>
              </div>
            </header>
            <p>
              Full Stack Developer, Systems Analyst, Clara's Father, Thais'
              Husband and Rugby Player
            </p>
            <a href="https://github.com/gabrielrmodesto">
              Veja o perfil no github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/15326732?s=460&v=4"
                alt="user profile"
              />
              <div className="user-info">
                <strong>Gabriel Modesto</strong>
                <span>ReactJS, React Native, PHP</span>
              </div>
            </header>
            <p>
              Full Stack Developer, Systems Analyst, Clara's Father, Thais'
              Husband and Rugby Player
            </p>
            <a href="https://github.com/gabrielrmodesto">
              Veja o perfil no github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/15326732?s=460&v=4"
                alt="user profile"
              />
              <div className="user-info">
                <strong>Gabriel Modesto</strong>
                <span>ReactJS, React Native, PHP</span>
              </div>
            </header>
            <p>
              Full Stack Developer, Systems Analyst, Clara's Father, Thais'
              Husband and Rugby Player
            </p>
            <a href="https://github.com/gabrielrmodesto">
              Veja o perfil no github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
