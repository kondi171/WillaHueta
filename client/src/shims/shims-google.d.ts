export { };

declare global {
    interface Window {
        initMap: () => void;
    }

    var google: any;
}