import React from 'react';
import './styles.css';

import octocat from '../../assets/images/Octocat.png';
import md from '../../assets/images/md.png';
import instagram from '../../assets/images/instagram.png';
import git from '../../assets/images/github.png';
import linkdln from '../../assets/images/linkdln.png';
import codepen from '../../assets/images/codepen.png';


function Landing() {
    return (
        <div id="page-landing">
            <div className="content-top">

                <div className="content-left">
                    <img src={md} alt=""/>
                        <div className="">
                            <p className="name"> Matheus Destefani
                            </p>
                        </div>
                    <p className="work-desk">Web Developer, UI / UX Engineer</p>
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
            <div className="content-middle">
                <div className="middle-left">
                    <div className="card-line-content-1">
                        a
                    </div>
                    <div className="card-line-content">
                        b   
                    </div>
                </div>
                <div className="middle-right">
                    <p>Projetos Finalizados</p>
                    <p>Aqui estão alguns projetos
                       pelo qual já participei e 
                       foram finalizados =)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Landing;