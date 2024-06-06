import { useState } from "react";
import PropTypes from "prop-types";

function UpdateTweetForm({ tweet, setShowModal, updateTweet }) {
  const [newTweetContent, setNewTweetContent] = useState(tweet.content);


  const handleSubmit = (e) => {
    e.preventDefault()
    updateTweet(tweet.id, newTweetContent)
    setShowModal(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTweetContent} 
      onChange={(e) => setNewTweetContent(e.target.value) }/>

      <input type="submit" value="save" />
    </form>
  );
}

UpdateTweetForm.propTypes = {
  tweet: PropTypes.object,
  setShowModal: PropTypes.func,
  updateTweet: PropTypes.func,
};

export default UpdateTweetForm;