import Posts from "./posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import Stories from "./stories/Stories";

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