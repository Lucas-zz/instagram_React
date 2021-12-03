export default function User({ img, nickname, name }) {
    return (
        <div class="usuario">
            <img src={img} />
            <div class="texto">
                <strong>{nickname}</strong>
                {name}
            </div>
        </div>
    );
}