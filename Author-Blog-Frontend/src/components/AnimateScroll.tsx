import { ScrollAnimation } from '@/hooks/scroll-Animation'

interface AnimationProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    threshold?: number;
    triggerOnce?: boolean;
}

export function FadeIn({
    children,
    delay = 0,
    className = '',
    threshold = 0.2,
    triggerOnce = true
}: AnimationProps){
    const { ref, isVisible } = ScrollAnimation({ threshold, triggerOnce });

    return (
        <div
        ref = {ref}
        className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
        style = {{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

export function RiseUp ({
    children,
    delay = 0,
    className = '',
    threshold = 0.2,
    triggerOnce = true
}: AnimationProps) {
    const { ref, isVisible } = ScrollAnimation({ threshold, triggerOnce });

    return (
        <div
            ref = {ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
            style={{transitionDelay: `${delay}ms`}}
        >
            {children}
        </div>
    )
}