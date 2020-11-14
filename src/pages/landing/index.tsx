import React from 'react';
import './styles.css';

import octocat from '../../assets/images/Octocat.png';
import md from '../../assets/images/md.png';
import instagram from '../../assets/images/instagram.png';
import git from '../../assets/images/github.png';
import linkdln from '../../assets/images/linkdln.png';
import codepen from '../../assets/images/codepen.png';
import madara1 from '../../assets/images/madara.jpg';
import madara2 from '../../assets/images/madara2.png';
import $ from 'jquery'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-top">

                <div className="content-left">
                    <img src={md} alt=""/>
                            <p className="name">Matheus</p>
                            <p className="sobrenome">Destefani</p>
                    <p className="work-desk">Web Developer, Data Scientist</p>
                    <div className="redes-socias">
                        <div className="card-redes">
                            <img className="icon-redes" src={git} alt="github"/>
                            <p className="desc-redes">Github</p>
                        </div>
                        <div className="card-redes">
                            <img className="icon-redes" src={codepen} alt="github"/>
                            <p className="desc-redes">Codepen</p>
                        </div>
                        <div className="card-redes">
                            <img className="icon-redes" src={instagram} alt="github"/>
                            <p className="desc-redes">instagram</p>
                        </div>
                        <div className="card-redes">
                            <img className="icon-redes" src={linkdln} alt="github"/>
                            <p className="desc-redes">Linkdln</p>
                        </div>
                    </div>
                </div>

                <div className="content-right">
                    <img className="octo" src={octocat} alt=""/>
                </div>

            </div>

            <div className="mainMiddle">
                <div className="content-middle">
                    <div className="middle-left">
                        <div className="card-line-content-1">
                            <p className="title-middle">Madara</p>
                            <p className="desc-middle">Madara Uchiha (うちはマダラ, Uchiha Madara) foi um lendário líder do clã Uchiha. Ele fundou Konohagakure ao lado de seu rival, Hashirama Senju, com a intenção de iniciar uma era de paz.</p>
                        </div>
                        <div className="card-line-content">
                            <img className="project-img" src={madara1} alt=""/>
                        </div>
                    </div>
                    <div className="middle-left dale">
                        <div className="card-line-content-1">
                            <p className="title-middle">Madara</p>
                            <p className="desc-middle">Madara Uchiha (うちはマダラ, Uchiha Madara) foi um lendário líder do clã Uchiha. Ele fundou Konohagakure ao lado de seu rival, Hashirama Senju, com a intenção de iniciar uma era de paz.</p>
                        </div>
                        <div className="card-line-content">
                            <img className="project-img" src={madara2} alt=""/>
                        </div>
                    </div>     
                </div>

                <div className="middle-right">
                    <div className="tomorrow">
                        <p className="right-middle-text">Projetos</p>
                        <p className="right-middle-text">Finalizados</p>
                    </div>
                    <div className="umf">
                        <p className="right-desc-text">Aqui estão alguns projetos
                            pelo qual já participei e 
                            foram finalizados =)
                        </p>
                    </div>
                </div>
            </div>

            <div className="martinGarrix">  
                <h1 className="right-middle-text teste">CONTINUA</h1>
            </div>
        </div>
    )
}

export default Landing;
