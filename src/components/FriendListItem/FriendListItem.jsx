import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClassName = isOnline ? css['is-online'] : css['is-offline'];
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${statusClassName}`}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
