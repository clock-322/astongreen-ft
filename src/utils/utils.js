export function clsx(...args) {
    return args
        .filter(Boolean)
        .map((arg) => String(arg))
        .join(" ")
        .trim();
}
