import { ref, onMounted, onBeforeUnmount, computed } from "vue";

export function useAnimate(
    reverse: boolean,
    options?: { desktop?: string; mobile?: string }
) {
    const width = ref(window.innerWidth);

    const updateWidth = () => {
        width.value = window.innerWidth;
    };

    onMounted(() => {
        window.addEventListener("resize", updateWidth);
    });

    onBeforeUnmount(() => {
        window.removeEventListener("resize", updateWidth);
    });

    const computedAos = computed(() => {
        if (width.value <= 600) {
            return options?.mobile ?? "fade-up";
        }
        if (!options?.desktop) {
            return reverse ? "fade-right" : "fade-left";
        }
        return options.desktop;
    });

    return { computedAos };
}
