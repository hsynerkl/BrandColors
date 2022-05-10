export const getContrastYIQ = (hexcolor) => {
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 144)) / 1000;
    return (yiq >= 131.5) ? 'black' : 'white';
}