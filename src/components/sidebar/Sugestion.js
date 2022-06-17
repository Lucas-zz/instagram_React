export default function Sugestion({ img, name, reason }) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={img} alt={name} />
                <div className="texto">
                    <div className="nome">{name}</div>
                    <div className="razao">{reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}