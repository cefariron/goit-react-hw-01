import css from './Profile.module.css';
console.log(css);

export const Profile = ({ data }) => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img
          src={data.avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{data.username}</p>
        <p className="tag">{data.tag}</p>
        <p className="location">{data.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="value">{data.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="value">{data.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="value">{data.likes}</span>
        </li>
      </ul>
    </div>
  );
};
