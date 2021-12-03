export default function Post({ userImg, username, img, userLikeImg, userLike, qtLikes }) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={userImg} alt={username} />
                    <div class="nome">{username}</div>
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={img} alt={username} />
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
                    <img src={userLikeImg} alt={userLike} />
                    <div class="texto">
                        Curtido por <strong>{userLike}</strong> e <strong>outras {qtLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}