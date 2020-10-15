module.exports = function check(str, bracketsConfig) {

    let brackets = bracketsConfig.flatMap(elem => {
        return elem.join('');
    });
    let start, end;
    do {
        start = str.length;
        for(let i = 0; i < brackets.length; i++) {
            str = str.replace(brackets[i], '')
        }
        end = str.length;
    } while(start > end);

    return (str.length === 0)

};

