export { };
    
type replacementType = string | ((group: string) => string);
    
declare global {
    interface String {
        before: (substring: string) => string;
        after: (substring: string) => string;
        between: (start: string, end: string) => string;
        replaceWithin: (rx: RegExp, ...replacements: replacementType[]) => string;
    }
}

(String.prototype as any).before = function (substring: string): string {
    const _this: string = this as string;
    const index = _this.indexOf(substring);
    if (index === -1)
        return _this;
    return _this.slice(0, index);
};

(String.prototype as any).after = function (substring: string): string {
    const _this: string = this as string;
    const index = _this.indexOf(substring);
    if (index === -1)
        return _this;
    return _this.slice(index + substring.length);
};

(String.prototype as any).between = function (start: string, end: string): string {
    const _this: string = this as string;
    return _this.after(start).before(end);
};

/**
 * Regex replaces for each group in the regex.
 */
(String.prototype as any).replaceWithin = function (rx: RegExp, ...replacements: replacementType[]): string {
    const _this: string = this as string;
    let result: string = _this;
    const segments: RegExpMatchArray[] = Array.from(result.matchAll(rx));
    console.log(segments);
    let lastEnd: number = 0;
    let sectioned: string[] = [];
    for (const segment of segments) {
        const start: number = segment.index!;
        const end: number = start + segment[0].length;
        sectioned.push(_this.substring(lastEnd, start));
        sectioned.push(segment[0]);
        lastEnd = end;
    }
    sectioned.push(_this.substring(lastEnd));
    console.log(sectioned);
    result = sectioned.join('');
    return result;
};
