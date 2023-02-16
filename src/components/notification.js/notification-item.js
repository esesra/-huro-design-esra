import React, { useState } from "react";

const TimelineItem = ({
  date,
  dotColor,
  avatarSrc,
  username,
  action,
  project,
  items,
  isUnread,
  actionType
}) => {
  const [unreadItems, setUnreadItems] = useState(
    items.filter((items) => items.unread)
  );
  const [readItems, setReadItems] = useState(
    items.filter((items) => !items.unread)
  );

 
    // const getactionType = (actionType) => {
    //   var added;
        
    //   if (actionType = added) {
    //     return (
    //       <div className="box-end">
    //         <div className="h-avatar is-small">
    //           <img
    //             className="avatar"
    //             src="https://via.placeholder.com/150x150"
    //             data-demo-src="assets/img/avatars/photos/8.jpg"
    //             alt=""
    //             data-user-popover="3"
    //           />
    //         </div>
    //       </div>
    //     );
    //   }
    //   return actionType;
    // };

   


  return (
    <div className={`timeline-item ${isUnread ? "is-unread" : ""}`}>
      <div className="date">
        <span>{date}</span>
      </div>
      <div className={`dot is-${dotColor}`}></div>
      <div className="content-wrap">
        <div className="content-box">
          <div className="status"></div>
          <div className="h-avatar">
            <img className="avatar" src={avatarSrc} alt="" />
          </div>
          <div className="box-text">
            <div className="meta-text">
              <p>
                <span>{username}</span> {action}
                <a>{project}</a>.
{/*                 
                {actionType && getactionType()} */}
              </p>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimelineItem;
