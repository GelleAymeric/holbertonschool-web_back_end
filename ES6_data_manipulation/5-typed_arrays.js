/* eslint-disable */
export default function createInt8TypedArray(lenght, position, value) {
    const buffer = new ArrayBuffer(lenght);
    const int8View = new Int8Array(buffer);
    if (position >= lenght) {
        throw Error('Position outside range');
    }
    int8View[position] = value;
    return new DataView(buffer);
}