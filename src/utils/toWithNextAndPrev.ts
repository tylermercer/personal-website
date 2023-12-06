
export type WithNextAndPrev<T> = {
    item: T,
    next?: T,
    prev?: T
}

export default function toWithNextAndPrev<T>(items: T[], reverse: boolean = false): WithNextAndPrev<T>[] {
    return items.map((t, i, a) => ({
        item: t,
        next: reverse ? a[i - 1] : a[i + 1],
        prev: reverse ? a[i + 1] : a[i - 1]
    }));
}
