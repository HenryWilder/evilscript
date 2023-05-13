export { };
    
declare global {
    interface String {
        before: (substring: string) => string;
        after: (substring: string) => string;
        between: (start: string, end: string) => string;
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

