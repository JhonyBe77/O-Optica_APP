import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/components/_Home.scss';
import bannerH from '../../../assets/images/bannerH.png';
import bannerM from '../../../assets/images/bannerM.png';
import bannerU from '../../../assets/images/bannerU.png';
import logoP from '../../../assets/images/lofO-Q.png';

const Home = () => {
    return (  
        <div className="home">
          <img src={logoP} alt="Logo O-Q" className="logo" />
          <main className="home-main">
              <Link to="/categoria/Masculino" className="banner">
                  <img src={bannerH} alt="Monturas Masculinas" />
                  <span className="banner-title">Monturas Masculinas</span>
              </Link>
              <Link to="/categoria/Femenino" className="banner">
                  <img src={bannerM} alt="Monturas Femeninas" />
                  <span className="banner-title">Monturas Femeninas</span>
              </Link>
              <Link to="/categoria/Unisex" className="banner">
                  <img src={bannerU} alt="Monturas Unisex" />
                  <span className="banner-title">Monturas Unisex</span>
              </Link>
          </main>
        </div>
    );
};

export default Home;
