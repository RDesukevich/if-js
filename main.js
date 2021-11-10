const colors = {
    data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (this.current === undefined || this.current === this.data.length) {
            this.current = 0;
        }
        return {
            value: this.data[this.current++],
        };
    },
};

const element1 = document.getElementById("text1");
const element2 = document.getElementById("text2");
const element3 = document.getElementById("text3");

const changeStyle = (id) => (event) => {
    event.target.style.color = id.next().value;
};

const pBlock = [element1, element2, element3];
for (let i = 0; i < pBlock.length; i++) {
    pBlock[i].addEventListener("click", changeStyle(Object.assign({}, colors)));
}