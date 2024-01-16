// import css from './App.module.css';
import { Profile } from '../Profile/Profile';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import userdata from '../../json/userdata.json'
import friendList from '../../json/friendslist.json'
import transactions from '../../json/transactionhistory.json'


export const App = () => {
  return (
    <>
      <Profile data={userdata[0]}/>
      <FriendList friends={friendList}/>
      <TransactionHistory data={transactions}/>
    </>
  );
};