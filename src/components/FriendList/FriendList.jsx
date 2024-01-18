import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <p className={css.title}>Friends</p>
      <ul className={css.friendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          const statusClassName = isOnline ? css['is-online'] : css['is-offline'];

          return (
            <li key={id}>
              <div className={css.item}>
                <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
                <p className={css.name}>{name}</p>
                <p className={`${css.status} ${statusClassName}`}>
                  {isOnline ? 'Online' : 'Offline'}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
