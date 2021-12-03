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

const userImg = [nineGag, meowed, barked, nathan, wawa, ra, filo, meme];
const nickname = ["9gag", "meowned", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];

export default function Stories() {
    return (
        <div class="stories">
            {nickname.map(name => (
                <Story img={nineGag} name={name} />)
            )}
            <div class="setinha">
                <img src={arrow} />
            </div>
        </div>
    );
}