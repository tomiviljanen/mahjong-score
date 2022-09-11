export const isObjectEqual = (o1: any, o2: any) =>
Object.keys(o1).length === Object.keys(o2).length 
    && Object.keys(o1).every(p => o1[p] === o2[p]);

export const arraysEqual = (a1: any[], a2: any[]) => 
a1.length === a2.length && a1.every((o, idx) => isObjectEqual(o, a2[idx]));

export const arrayContainsArray = (array1: any[], array2: any[]) => 
array1.every((elem1) => array2.some(elem2 => isObjectEqual(elem1, elem2)));