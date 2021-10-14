const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

function deepEqual(object1, object2){
    if (object1 === object2) {
        return true;
    }
    else {
        if (Object.keys(object1).length !== Object.keys(object2).length) {
            return false;
        }
        for (const prop in object1) {

            if (!object2.hasOwnProperty(prop)) {
                return false;
            }
            if (object1[prop].valueOf() !== object2[prop].valueOf()) {
                if (! deepEqual(object1[prop], object2[prop])) {
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
