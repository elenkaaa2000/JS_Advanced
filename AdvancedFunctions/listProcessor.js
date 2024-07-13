function solve(input) {
    let command = (function () {
        let list = [];
        return {
            add: (s) => list.push(s),
            remove: s => list = list.filter(x => x != s),
            print: () => console.log(list.join(', '))
        }
    })();

    for (let token of input) {
        let [commandN, str] = token.split(' ');
        command[commandN](str);
    }

}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])