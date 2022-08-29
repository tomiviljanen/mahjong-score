

export const isObjectEqual = (val1: any, val2: any) => {
    return JSON.stringify(val1) === JSON.stringify(val2);
}