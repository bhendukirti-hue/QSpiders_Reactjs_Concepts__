const Card=(props)=>{
    console.log(props); //{user:{username:"sunadri"}}
    
    return(
        <div className="card">
            <img src={props.user.img} alt={props.user.name} />
            <button className="edit-btn">✎ Edit Profile</button>
            <div className="box">
                <div className="s-box">
            <div className="name-row">
            <h3>{props.user.name} <span className="verified">✔</span></h3>
            </div>
            <div className="sub-row">
            <h4>{props.user.username}</h4>
            <div className="actions">
                <button className="follow-btn">+ Follow</button>
                <button className="msg-btn">💬</button>
            </div> 
            </div>
            <p>{props.user.about}</p>
            <div className="stats">
    <div>
        <span>Posts</span>
        <h5>{props.user.posts}</h5>
    </div>
    <div>
        <span>Following</span>
        <h5>{props.user.following}</h5>
    </div>
    <div>
        <span>Followers</span>
        <h5>{props.user.followers}</h5>
    </div>
</div>
</div>
</div>
        </div>
    )
}
export default Card