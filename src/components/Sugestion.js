import userImg from "../assets/img/bad.vibes.memes.svg"

export default function Sugestion() {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={userImg} />
                <div class="texto">
                    <div class="nome">bad.vibes.memes</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}