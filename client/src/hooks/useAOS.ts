import { onMounted, onUpdated, nextTick } from "vue";
import AOS from "aos";

export function useAOS() {
    const refreshAOS = () => {
        nextTick(() => {
            setTimeout(() => {
                AOS.refreshHard();
            }, 50);
        });
    };

    onMounted(refreshAOS);
    onUpdated(refreshAOS);
}