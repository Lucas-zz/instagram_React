import Sugestion from "./Sugestion";

//user img
import badvibes from "../assets/img/bad.vibes.memes.svg";
import chibird from "../assets/img/chibirdart.svg";
import razoes from "../assets/img/razoesparaacreditar.svg";
import adorable_animals from "../assets/img/adorable_animals.svg";
import smallcutecats from "../assets/img/smallcutecats.svg";

export default function Sugestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {users.map(user => (
                <Sugestion
                    img={user.img}
                    name={user.name}
                    reason={user.reason}
                />
            ))}
        </div>
    );
}

let users = [
    {
        name: "bad.vibes.memes",
        img: badvibes,
        reason: "Segue você",
    },
    {
        name: "chibirdart",
        img: chibird,
        reason: "Segue você",
    },
    {
        name: "razoesparaacreditar",
        img: razoes,
        reason: "Novo no Instagram",
    },
    {
        name: "adorable_animals",
        img: adorable_animals,
        reason: "Segue você",
    },
    {
        name: "smallcutecats",
        img: smallcutecats,
        reason: "Segue você",
    },
]