const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        const obj = this,
            data = this.data;
        return {
            next() {
                obj.current = obj.current === undefined ? 0 : obj.current + 1;
                return {
                    done: obj.current === data.length,
                    value: { color: data[obj.current], index: obj.current }
                };
            }
        };
    }
}

const changeStyle = id => event => {
    event.target.style.color = colors.next(id).value;
};