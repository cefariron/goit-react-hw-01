import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <div className={css.friendsContainer}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <div className={css.item} key={id}>
              <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
              <p className={css.name}>{name}</p>
              <p className={css.status}>{isOnline ? 'Online' : 'Offline'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
