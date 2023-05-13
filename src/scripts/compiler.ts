import * as Func from "./snippets/function";
import * as FuncCall from "./snippets/function-call";
import * as Type from "./snippets/type";

export const highlight = (text: string) => {
    text = Func.highlight(text);
    text = FuncCall.highlight(text);
    text = Type.highlight(text);
    return text;
};

export const compile = (text: string) => {
    text = Func.compile(text);
    text = FuncCall.compile(text);
    text = Type.highlight(text);
    return text;
};
