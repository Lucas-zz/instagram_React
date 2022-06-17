export default function User({ img, nickname, name }) {
    return (
        <div className="usuario">
            <img src={img} alt="user's profile" />
            <div className="texto">
                <strong>{nickname}</strong>
                {name}
            </div>
        </div>
    );
}