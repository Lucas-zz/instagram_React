import userImg from "../assets/img/9gag.svg"

export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                <span>{props.name}</span>
            </div>
        </div>
    );
}