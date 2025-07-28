declare module 'aos' {
    interface AosOptions {
        offset?: number;
        delay?: number;
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?: string;
        disable?: boolean | 'phone' | 'tablet' | 'mobile';
        startEvent?: string;
        debounceDelay?: number;
        throttleDelay?: number;
    }

    export function init(options?: AosOptions): void;
    export function refresh(): void;
    export function refreshHard(): void;
}
