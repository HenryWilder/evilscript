export const ex = (): string => 'any';

const rx = /(any)/g;

export const highlight = (text: string) => {
    text = text.replace(rx, '<span class="type">$1</span>');
    return text;
};

export const compile = (text: string) => {
    return text.replace(rx, '');
};