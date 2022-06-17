export default function Story({ img, name }) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={img} alt={name} />
            </div>
            <div className="usuario">
                <span>{name}</span>
            </div>
        </div>
    );
}