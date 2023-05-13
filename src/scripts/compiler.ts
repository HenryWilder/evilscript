const rxFuncDef = /Dear EvilScript interpreter overlord, I must make this humble request of you:\nPlease, please, please define a local function for me\.\nThe name of it, if you will be so kind as to create such a function, will be ([a-z]+)\.\nThat is to say, the name of the variable storing this function you would create, if you so choose,\nwhich I understand will be both mutable and local, will be ([a-z]+)\.\n\nYou would have my deepest appreciation, and lifelong gratitude, if you would be so kind as to give this function,\nthe function stored in the variable by the name of ([a-z]+), ((?:a single parameter which takes an array of variables of the type of any, not exceeding a count of 10\.)|(?:no parameters, for I do not wish to waste your ever so precious memory\.\.\.))\n\nFinally, I would like to request that the definition of the function stored in the variable by the name of ([a-z]+) please be as follows,\nif you deem it worthy of your time:\n\n(.*)\n\nThat is all I ask you, your greatness\. Thank you a million times over for your wisdom and graciousness!/g;

const rxFuncDefReplacement = (full: string, funcName1: string, funcName2: string, funcName3: string, parameterPhrase: string, funcName4: string, definition: string) => {
    if (!(funcName1 === funcName2 && funcName2 === funcName3 && funcName3 === funcName4))
        return full;
    const takesParameter = parameterPhrase !== "no parameters, for I do not wish to waste your ever so precious memory...";
    const parameterStr = takesParameter ? `a single parameter which takes an <span class="type">array</span> of variables of the type of <span class="type">any</span>, not exceeding a count of <span class="literal">10</span>.` : "no parameters, for I do not wish to waste your ever so precious memory...";
    return `<span class="keyword">Dear EvilScript interpreter overlord, I must make this humble request of you:
Please, please, please define a local function for me.
The name of it, if you will be so kind as to create such a function, will be <span class="var">${funcName1}</span>.
That is to say, the name of the variable storing this function you would create, if you so choose,
which I understand will be both mutable and local, will be <span class="var">${funcName2}</span>.

You would have my deepest appreciation, and lifelong gratitude, if you would be so kind as to give this function,
the function stored in the variable by the name of <span class="var">${funcName3}</span>,
${parameterStr}

Finally, I would like to request that the definition of the function stored in the variable by the name of <span class="var">${funcName4}</span> please be as follows,
if you deem it worthy of your time:

</span>${definition}<span class="keyword">

That is all I ask you, your greatness. Thank you a million times over for your wisdom and graciousness!</span>`;
};

const rxFuncDefCompile = (full: string, funcName1: string, funcName2: string, funcName3: string, parameterPhrase: string, funcName4: string, definition: string) => {
    if (!(funcName1 === funcName2 && funcName2 === funcName3 && funcName3 === funcName4))
        return full;
    const takesParameter = parameterPhrase !== "no parameters, for I do not wish to waste your ever so precious memory...";
    return `let ${funcName1}=(${takesParameter ? "args" : ""})=>{if(args!==undefined&&!Array.isArray(args))throw new Error('Incorrect type for args.');${definition}}`;
}

export const highlight = (text: string): string => {
    text = text.replace(rxFuncDef, rxFuncDefReplacement);
    return `<pre style="margin-block:-0.5ch;">${text}</pre>`;
}

export const compile = (text: string): string => {
    text = text.replace(rxFuncDef, rxFuncDefCompile);
    return text;
}