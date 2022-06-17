export default function Post({ userImg, username, img, userLikeImg, userLike, qtLikes }) {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={userImg} alt={username} />
                    <div className="nome">{username}</div>
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={img} alt={username} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={userLikeImg} alt={userLike} />
                    <div className="texto">
                        Curtido por <strong>{userLike}</strong> e <strong>outras {qtLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}