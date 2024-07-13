function extensibleObject() {
    let parent = {};
    let child = Object.create(parent);

    child.extend = function (obj) {
        let entries = Object.entries(obj);

        for (let [k, v] of entries) {
            if (typeof (v) === "function") {
                parent[k] = v
            } else {
                child[k] = v
            }
        }
    }
    return child
}
const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);