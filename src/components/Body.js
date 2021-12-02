import Posts from "./Posts";
import Stories from "./Stories";
import Sidebar from "./Sidebar";

export default function Body() {
    return (

        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    );
}