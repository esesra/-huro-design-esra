
import React, { useState } from "react";
import { Button } from "../components/button/Button";
import TimelineItem from "../components/notification.js/notification-item";


const AdminNotificationPage = () => {
  const items = [
    {
      date: "Sep 23, 2020",
      dotColor: "info",
      avatarSrc: "https://via.placeholder.com/150x150",
      username: "Tara S.",
      action: "added you to the",
      project: "Barber Website Redesign Project",
      isUnread: true,
    },
    {
      date: "Sep 23, 2020",
      dotColor: "danger",
      avatarSrc: "https://via.placeholder.com/150x150",
      username: "Irina V.",
      action: "left a comment on a",
      project: "Task, in Corporate Tools Rebranding",
      isUnread: true,
    },
    {
      date: "Sep 22, 2020",
      dotColor: "success",
      avatarSrc: "https://via.placeholder.com/150x150",
      username: "Mary L.",
      action: "added 3 new members to the",
      project: "Blake & Mortimer Project",
    },
    {
      date: "Sep 23, 2020",
      dotColor: "purple",
      avatarSrc: "https://via.placeholder.com/150x150",
      username: "John D.",
      action: "updated the status of the",
      project: "Newsletter Subscription Form",
    },
    {
      date: "Sep 23, 2020",
      dotColor: "danger",
      avatarSrc: "https://via.placeholder.com/150x150",
      username: "Irina V.",
      action: "left a comment on a",
      project: "Task, in Corporate Tools Rebranding",
    },
    {
      date: "Sep 22, 2020",
      dotColor: "success",
      avatarSrc: "https://via.placeholder.com/150x150",
      username: "Mary L.",
      action: "added 3 new members to the",
      project: "Blake & Mortimer Project",
    },
    {
      date: "Sep 23, 2020",
      dotColor: "purple",
      avatarSrc: "https://via.placeholder.com/150x150",
      username: "John D.",
      action: "updated the status of the",
      project: "Newsletter Subscription Form",
    },
  ];

  return (
    <div className="timeline-wrapper">
      <div className="timeline-header"></div>
      <div className="timeline-wrapper-inner">
        <div className="timeline-container">
          {items.map((item, index) => (
            <TimelineItem items={items} key={index} {...item} />
          ))}
        </div>
        <div class="load-more-wrap has-text-centered">
          <Button isOutlined>Load More </Button>
          
        </div>
      </div>
    </div>
  );
};
 export default AdminNotificationPage;
