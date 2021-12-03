export default function Sugestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt={props.name} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}