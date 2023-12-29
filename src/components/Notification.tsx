'use client'
import React from 'react';
import UseNotificationAPI from "@/hooks/UseNotificationAPI";

import Styles from "@/styles/notification.module.css"

const Notification = () => {

    const {notification, removeNotification} = UseNotificationAPI();


    if (notification?.message != undefined) {
        return (
            <div className={Styles.Notification}>
                <h5>{notification?.MessageTitle}</h5>
                <p>{notification?.message}</p>
                <button onClick={() => removeNotification()}>Close</button>
            </div>
        );
    }
};

export default Notification;