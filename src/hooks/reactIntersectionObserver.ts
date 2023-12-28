import React, {type RefObject, useEffect} from 'react';

const ReactIntersectionObserver = (ref : RefObject<HTMLDivElement>) => {
    const [isOnScreen, setOnScreen] = React.useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setOnScreen(entry.isIntersecting)
            }, {}
        )

        ref.current && observer.observe(ref.current);

        // @ts-ignore
        return () => observer.unobserve(ref.current);
    })
    return isOnScreen
};

export default ReactIntersectionObserver;