export default function User(props) {
    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>{props.nickname}</strong>
                {props.name}
            </div>
        </div>
    );
}