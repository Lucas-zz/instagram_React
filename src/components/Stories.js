import Story from "./Story";
import arrow from "../assets/img/Vector.svg";

import nineGag from "../assets/img/9gag.svg";
import meowed from "../assets/img/meowed.svg";
import barked from "../assets/img/barked.svg";
import nathan from "../assets/img/nathanwpylestrangeplanet.svg";
import wawa from "../assets/img/wawawicomics.svg";
import ra from "../assets/img/respondeai.svg";
import filo from "../assets/img/filomoderna.svg";
import meme from "../assets/img/memeriagourmet.svg";

export default function Stories() {
    return (
        <div class="stories">
            {user.map(a => (
                <Story img={a.userImg} name={a.username} />)
            )}
            <div class="setinha">
                <img src={arrow} />
            </div>
        </div>
    );
}

let user = [
    {
        username: "9gag",
        userImg: nineGag,
    },
    {
        username: "meowed",
        userImg: meowed,
    },
    {
        username: "barked",
        userImg: barked,
    },
    {
        username: "nathanwpylestrangeplanet",
        userImg: nathan,
    },
    {
        username: "wawawicomics",
        userImg: wawa,
    },
    {
        username: "respondeai",
        userImg: ra,
    },
    {
        username: "filomoderna",
        userImg: filo,
    },
    {
        username: "memeriagourmet",
        userImg: meme,
    },
]