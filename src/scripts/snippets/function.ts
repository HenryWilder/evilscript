export const exBase: string = `(Dear EvilScript interpreter overlord, I must make this humble request of you:
Please, please, please define a local function for me.
I would like for the name of the variable storing this function you would create, if you so choose, which I understand would be both mutable and local, to be )(EVILSCRIPT_FUNCNAME)(.
You would have my deepest appreciation, and lifelong gratitude, if you would be so kind as to give this function )(a single parameter which takes an array of variables of the type of any, not exceeding a count of 10.|no parameters, for I do not wish to waste your ever so precious memory...)(
Finally, I would like to request that the definition of the function please be as follows, if you deem it worthy of your time:

)[[EVILSCRIPT_BLOCKCAPTURE]](

That is all I ask you, your greatness. Thank you a million times over for your wisdom and graciousness!)`

export const ex = (funcname: string, block: string): string => {
    return exBase
        .replace(/\(EVILSCRIPT_FUNCNAME\)/g, funcname)
        .replace('[[EVILSCRIPT_BLOCKCAPTURE]]', block)
        .replace(/\|[^\)]+\)/, '')
        .replace(/\(|\)/g, '');
};

const [rxStart, rxEnd] = exBase.split('[[EVILSCRIPT_BLOCKCAPTURE]]').map((e: string) => new RegExp(e.replace(/\n/g, '\\n').replace(/EVILSCRIPT_FUNCNAME/g,'[a-z]+'), 'g')) as [RegExp, RegExp];

export const highlight = (text: string) => {
    text = text.replace(rxStart, '<span class="keyword">$1<span class="var">$2</span>$3$4$5</span>');
    text = text.replace(rxEnd, '<span class="keyword">$1</span>');
    return text;
};

export const compile = (text: string) => {
    return text; // Todo
};
