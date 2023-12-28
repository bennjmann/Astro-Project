'use client'

import React, {type ReactNode, useEffect, useRef} from 'react';
import reactIntersectionObserver from "@/hooks/reactIntersectionObserver";



interface Props {
    animateClass: string;
    children: ReactNode;
    extraClasses?: string;
}

const AnimationWrapper = ({ children, animateClass, extraClasses } : Props) => {

    let wrapper = useRef<HTMLInputElement>(null)
    let observer = reactIntersectionObserver(wrapper);

    if (observer) {
        wrapper.current?.classList.add(animateClass);
    }

    return (
        <div ref={wrapper} className={`${extraClasses}`}>
            {children}
        </div>
    )

};

export default AnimationWrapper;