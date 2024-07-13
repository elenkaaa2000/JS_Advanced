function solve(...arguments) {
    let result = {};

    for (let arg of arguments) {
        let type = typeof (arg);
        console.log(`${type}: ${arg}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0
        }

        result[type] += 1
    }
    Object.entries(result).sort(([k, v], [k2, v2]) => v2 - v).forEach(([k, v]) => {
        console.log(`${k} = ${v}`);
    })
}
solve('cat', 42, function () { console.log('Hello world!'); }
)