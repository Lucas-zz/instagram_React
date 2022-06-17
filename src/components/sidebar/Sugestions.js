import Sugestion from "./Sugestion";

//users img
import badvibes from "../../assets/img/bad.vibes.memes.svg";
import chibird from "../../assets/img/chibirdart.svg";
import razoes from "../../assets/img/razoesparaacreditar.svg";
import adorable_animals from "../../assets/img/adorable_animals.svg";
import smallcutecats from "../../assets/img/smallcutecats.svg";

export default function Sugestions() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {users.map(user => (
                <Sugestion
                    key={user.id}
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
        id: 1,
        name: "bad.vibes.memes",
        img: badvibes,
        reason: "Segue você",
    },
    {
        id: 2,
        name: "chibirdart",
        img: chibird,
        reason: "Segue você",
    },
    {
        id: 3,
        name: "razoesparaacreditar",
        img: razoes,
        reason: "Novo no Instagram",
    },
    {
        id: 4,
        name: "adorable_animals",
        img: adorable_animals,
        reason: "Segue você",
    },
    {
        id: 5,
        name: "smallcutecats",
        img: smallcutecats,
        reason: "Segue você",
    },
]