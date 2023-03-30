export const isActiveBtn = (direction, path) =>
    path.includes(direction) ? ` ${direction}-active` : ''
