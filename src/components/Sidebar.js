import Sugestions from "./Sugestions";
import User from "./User";
import userImg from "../assets/img/catanacomics.svg"

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User img={userImg} nickname="catanacomics" name="Catana" />
            <Sugestions />

            <div class="about">
                <div class="links">
                    <ul>
                        <li class="lista"><a href="#">Sobre</a></li>
                        <li class="lista"><a href="#">Ajuda</a></li>
                        <li class="lista"><a href="#">Imprensa</a></li>
                        <li class="lista"><a href="#">API</a></li>
                        <li class="lista"><a href="#">Carreiras</a ></li>
                        <li class="lista"><a href="#">Privacidade</a></li>
                        <li class="lista"><a href="#">Termos</a></li>
                        <li class="lista"><a href="#">Localizações</a></li>
                        <li class="lista"><a href="#">Contas mais relevantes</a></li>
                        <li class="lista"><a href="#">Hashtags</a></li>
                        <li><a href="#">Idioma</a></li>
                    </ul>
                </div>

                <div class="copyright">
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
            </div >
        </div >
    );
}