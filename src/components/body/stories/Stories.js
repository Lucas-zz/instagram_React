import Story from "./Story";
import arrow from "../../../assets/img/Vector.svg";

// import das imagens
import nineGag from "../../../assets/img/9gag.svg";
import meowed from "../../../assets/img/meowed.svg";
import barked from "../../../assets/img/barked.svg";
import nathan from "../../../assets/img/nathanwpylestrangeplanet.svg";
import wawawi from "../../../assets/img/wawawicomics.svg";
import respondeai from "../../../assets/img/respondeai.svg";
import filo from "../../../assets/img/filomoderna.svg";
import memeria from "../../../assets/img/memeriagourmet.svg";

export default function Stories() {
    return (
        <div className="stories">
            {users.map(user => (
                <Story
                    key={user.id}
                    img={user.img}
                    name={user.name}
                />
            ))}
            <div className="setinha">
                <img src={arrow} alt="stories navigation arrow" />
            </div>
        </div>
    );
}

let users = [
    {
        id: 1,
        name: "9gag",
        img: nineGag,
    },
    {
        id: 2,
        name: "meowed",
        img: meowed,
    },
    {
        id: 3,
        name: "barked",
        img: barked,
    },
    {
        id: 4,
        name: "nathanwpylestrangeplanet",
        img: nathan,
    },
    {
        id: 5,
        name: "wawawicomics",
        img: wawawi,
    },
    {
        id: 6,
        name: "respondeai",
        img: respondeai,
    },
    {
        id: 7,
        name: "filomoderna",
        img: filo,
    },
    {
        id: 8,
        name: "memeriagourmet",
        img: memeria,
    },
]