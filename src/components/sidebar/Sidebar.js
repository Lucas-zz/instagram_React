/* eslint-disable jsx-a11y/anchor-is-valid */
import Sugestions from "./Sugestions";
import User from "./User";

import userImg from "../../assets/img/catanacomics.svg"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <User img={userImg} nickname="catanacomics" name="Catana" />
            <Sugestions />

            <div className="about">
                <div className="links">
                    <ul>
                        <li className="lista"><a href="#">Sobre</a></li>
                        <li className="lista"><a href="#">Ajuda</a></li>
                        <li className="lista"><a href="#">Imprensa</a></li>
                        <li className="lista"><a href="#">API</a></li>
                        <li className="lista"><a href="#">Carreiras</a ></li>
                        <li className="lista"><a href="#">Privacidade</a></li>
                        <li className="lista"><a href="#">Termos</a></li>
                        <li className="lista"><a href="#">Localizações</a></li>
                        <li className="lista"><a href="#">Contas mais relevantes</a></li>
                        <li className="lista"><a href="#">Hashtags</a></li>
                        <li><a href="#">Idioma</a></li>
                    </ul>
                </div>

                <div className="copyright">
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
            </div >
        </div >
    );
}