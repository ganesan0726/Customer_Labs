import React from "react";

const PostAPI = ({ handleSave, handleCancel }) => {
  return (
    <div className="send-form">
      <button className="save-button" onClick={handleSave}>
        Save the segment
      </button>
      <button className="cancel-button" onClick={handleCancel}>
        Cancel the segment
      </button>
    </div>
  );
};

export default PostAPI;
