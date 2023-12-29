'use client'
import React, {createContext, type ReactNode, useCallback, useState} from 'react';
import {string} from "prop-types";

export const NotificationContext = createContext<
    {notification: {MessageTitle: string | undefined, message: string | undefined} | undefined, addNotification: (MessageTitle: string, message: string) => void, removeNotification: () => void}
>({
    notification: {MessageTitle: undefined, message: undefined},
    addNotification: (message : string, MessageTitle : string) => {},
    removeNotification: () => {},
})


interface Props {
    children: ReactNode;
}

const NotificationProvider = ({children} : Props) => {
    const [notification, setNotification] = useState<{MessageTitle: string | undefined, message: string | undefined}>()

    const removeNotification = () => setNotification({MessageTitle: undefined, message: undefined})

    const addNotification = (MessageTitle : string, message : string, ) => setNotification({MessageTitle, message})

    const contextValue = {
        notification: notification,
        addNotification: useCallback((MessageTitle : string, message : string) => addNotification(MessageTitle, message), []),
        removeNotification: useCallback(() => removeNotification(), []),

    }

    return (
        <NotificationContext.Provider value={contextValue}>
            {children}
        </NotificationContext.Provider>
    )


}

export default NotificationProvider;