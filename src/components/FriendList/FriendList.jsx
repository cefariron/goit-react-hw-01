export const FriendList = ({ friends }) => {
  return (
    friends.map(({avatar, name, isOnline, id}) => {
      return (
        <div className="item" key={id}>
      <img className="avatar" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      <p className="status">{isOnline ? "Online" : "Offline"}</p>
    </div>
      )
    })
  );
};
