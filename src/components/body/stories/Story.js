export default function Story({ img, name }) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={img} />
            </div>
            <div class="usuario">
                <span>{name}</span>
            </div>
        </div>
    );
}