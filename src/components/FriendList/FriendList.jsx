import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <p className={css.title}>Friends</p>
      <ul className={css.friendsList}>
        {friends.map(friend => {
          return (<li key={friend.id}>
            <FriendListItem 
            avatar={friend.avatar} 
            name={friend.name} 
            isOnline={friend.isOnline} />
          </li>
          );
        })}
      </ul>
    </div>
  );
};