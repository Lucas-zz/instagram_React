import user from "../assets/img/meowed.svg";
import post from "../assets/img/gato-telefone.svg";
import like from "../assets/img/respondeai.svg";

export default function Post() {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={user} />
                    <div class="nome">meowed</div>
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={post} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={like} />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}