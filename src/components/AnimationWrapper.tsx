'use client'
import React, {type ReactNode, useEffect, useRef} from 'react';
import reactIntersectionObserver from "../../../../astro/my-app/src/hooks/reactIntersectionObserver.ts";



interface Props {
    animateClass: string;
    children: ReactNode;
    extraClasses?: string;
}

const AnimationWrapper = ({ children, animateClass, extraClasses } : Props) => {

    let wrapper = useRef<HTMLInputElement>(null)
    let observer = reactIntersectionObserver(wrapper);


    console.log(extraClasses ?? '' + observer ? animateClass : undefined)

    return (
        <div ref={wrapper} className={`${extraClasses} ${observer ? animateClass : undefined}`}>
            {children}
        </div>
    )

};

export default AnimationWrapper;