export const required = value => {
    if (value) return undefined;
    return "Required";
}

export const maxLengthCreator = (max) => (value) => {
    if (value.length > max) return `Maximum ${max} symbols`;
    return undefined;
}