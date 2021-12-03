export default function Sugestion({ img, name, reason }) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={img} alt={name} />
                <div class="texto">
                    <div class="nome">{name}</div>
                    <div class="razao">{reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}