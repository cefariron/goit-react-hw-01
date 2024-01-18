import { Profile } from '../Profile/Profile';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import userData from '../../json/userdata.json';
import friendList from '../../json/friendslist.json';
import transactions from '../../json/transactionhistory.json';

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendList} />
      <TransactionHistory data={transactions} />
    </>
  );
};
