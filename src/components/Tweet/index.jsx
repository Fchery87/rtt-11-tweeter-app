import PropTypes from 'prop-types';
import styles from './Tweet.module.css';
import { FaHeart } from 'react-icons/fa';
import { LiaRetweetSolid } from 'react-icons/lia';
import Button from 'react-bootstrap/Button';

function Tweet({ tweet, removeTweet }) {
  return (
    <div className={styles.container}>
      <div>{tweet.username}</div>
      <div>{tweet.content}</div>
      <div>
        <div>
          <FaHeart /> {tweet.likes}{' '}
        </div>
        <div>
          <LiaRetweetSolid />
          {tweet.retweets}{' '}
        </div>
      </div>

      <div>
        <Button variant='danger' onClick={() => removeTweet(tweet.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  removeTweet: PropTypes.func,
};

export default Tweet;
