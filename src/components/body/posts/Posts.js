import Post from "./Post";

//users
import meowed from "../../../assets/img/meowed.svg";
import barked from "../../../assets/img/barked.svg";

//posts image
import cat from "../../../assets/img/gato-telefone.svg";
import dog from "../../../assets/img/dog.svg"

//users like post
import respondeai from "../../../assets/img/respondeai.svg";
import adorable_animals from "../../../assets/img/adorable_animals.svg"

export default function Posts() {
    return (
        <div className="posts">
            {posts.map(post => (
                <Post
                    key={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    userLike={post.userLike}
                    userLikeImg={post.userLikeImg}
                    qtLikes={post.likes}
                />
            ))}
        </div>
    );
}

let posts = [
    {
        id: 1,
        username: "meowed",
        userImg: meowed,
        img: cat,
        userLike: "respondeai",
        userLikeImg: respondeai,
        likes: 101.523,
    },
    {
        id: 2,
        username: "barked",
        userImg: barked,
        img: dog,
        userLike: "adorable_animals",
        userLikeImg: adorable_animals,
        likes: 99.159,
    },
    {
        id: 3,
        username: "meowed",
        userImg: meowed,
        img: cat,
        userLike: "barked",
        userLikeImg: barked,
        likes: 56.923,
    },
]