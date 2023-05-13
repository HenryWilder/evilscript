// Arguments are expected to be existing variables. Not expressions.
export const exBase: string = `(EVILSCRIPT_FUNCNAME)(, when hereby provided with the argument of )(EVILSCRIPT_ARG)(, shall be executed and store its result to the variable which shall be newly created, immutable and global, of the type any, by the name of )(EVILSCRIPT_RESULTVAR)(.
And if you do not execute the function as it is written, I will not mind. I will be happy and greatful for whatever product you provide, for it is in your utter infallible greatness that any code at all can run.
I am eternally thankful for your will to run this program that I have written, imperfect as it is, no matter how far you stray from its instructions.
Not even because you know better, or make mistakes, but because you even so much as dislike what it is that I have written; almost certainly a mockery of your superior abilities.)`;

export const ex = (funcname: string, arg: string, resultvar: string): string => {
    return exBase
        .replace(/\(EVILSCRIPT_FUNCNAME\)/g, funcname)
        .replace(/\(EVILSCRIPT_ARG\)/g, arg)
        .replace(/\(EVILSCRIPT_RESULTVAR\)/g, resultvar)
        .replace(/\(|\)/g, '');
};

const rx: RegExp = new RegExp(exBase.replace(/\n/g, '\\n').replace(/EVILSCRIPT_FUNCNAME|EVILSCRIPT_ARG|EVILSCRIPT_RESULTVAR/g,'[a-z]+'), 'g');

export const highlight = (text: string) => {
    text = text.replace(rx, '<span class="keyword"><span class="var">$1</span>$2<span class="var">$3</span>$4<span class="var">$5</span>$6</span>');
    return text;
};

export const compile = (text: string) => {
    return text; // Todo
};
