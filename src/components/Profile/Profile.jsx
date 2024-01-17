import css from './Profile.module.css';
console.log(css);

export const Profile = ({ data }) => {
  console.log(data);
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={data.avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{data.username}</p>
        <p className={css.tag}>@{data.tag}</p>
        <p className={css.location}>{data.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.value}>{data.stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.value}>{data.stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.value}>{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
