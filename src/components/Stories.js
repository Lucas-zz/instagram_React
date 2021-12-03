import Story from "./Story";
import arrow from "../assets/img/Vector.svg";

// import das imagens
import nineGag from "../assets/img/9gag.svg";
import meowed from "../assets/img/meowed.svg";
import barked from "../assets/img/barked.svg";
import nathan from "../assets/img/nathanwpylestrangeplanet.svg";
import wawawi from "../assets/img/wawawicomics.svg";
import respondeai from "../assets/img/respondeai.svg";
import filo from "../assets/img/filomoderna.svg";
import memeria from "../assets/img/memeriagourmet.svg";

export default function Stories() {
    return (
        <div class="stories">
            {users.map(user => (
                <Story img={user.img} name={user.name} />)
            )}
            <div class="setinha">
                <img src={arrow} />
            </div>
        </div>
    );
}

let users = [
    {
        name: "9gag",
        img: nineGag,
    },
    {
        name: "meowed",
        img: meowed,
    },
    {
        name: "barked",
        img: barked,
    },
    {
        name: "nathanwpylestrangeplanet",
        img: nathan,
    },
    {
        name: "wawawicomics",
        img: wawawi,
    },
    {
        name: "respondeai",
        img: respondeai,
    },
    {
        name: "filomoderna",
        img: filo,
    },
    {
        name: "memeriagourmet",
        img: memeria,
    },
]