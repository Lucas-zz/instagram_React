//user
import meowed from "../assets/img/meowed.svg";
import barked from "../assets/img/barked.svg";

//post image
import cat from "../assets/img/gato-telefone.svg";
import dog from "../assets/img/dog.svg"

//user like post
import respondeai from "../assets/img/respondeai.svg";
import adorable_animals from "../assets/img/adorable_animals.svg"


import Post from "./Post";

export default function Posts() {
    return (
        <div class="posts">
            {posts.map(post => (
                <Post
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
        username: "meowed",
        userImg: meowed,
        img: cat,
        userLike: "respondeai",
        userLikeImg: respondeai,
        likes: 101.523,
    },
    {
        username: "barked",
        userImg: barked,
        img: dog,
        userLike: "adorable_animals",
        userLikeImg: adorable_animals,
        likes: 99.159,
    },
    {
        username: "meowed",
        userImg: meowed,
        img: cat,
        userLike: "barked",
        userLikeImg: barked,
        likes: 56.923,
    },
]