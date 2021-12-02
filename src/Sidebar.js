import Sugestions from "./Sugestions";
import User from "./User";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User />
            <Sugestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}