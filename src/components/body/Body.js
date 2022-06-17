import Posts from "./posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import Stories from "./stories/Stories";

export default function Body() {
    return (

        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    );
}