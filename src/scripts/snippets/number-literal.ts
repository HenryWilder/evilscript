export const ex = (value: number): string => `${value}`.replace('.',',');

const rx = /([\+\-]?([0-9]+,[0-9]*|,?[0-9]+))/g;

export const highlight = (text: string) => {
    text = text.replace(rx, '<span class="literal">$1</span>');
    return text;
};

export const compile = (text: string) => {
    return text.replace(rx, '$1');
};