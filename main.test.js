/**
 * @jest-environment jsdom
 */

describe('check out chenge text color auto the click', () =>{
    const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

    document.body.innerHTML = `
        <p id="text1">Text 1</p>
        <p id="text2">Text 2</p>
        <p id="text3">Text 3</p>
    `

    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');

    let i = 0;
    let j = 0;
    let y = 0;

    test('expect color in text1 is magenta', () => {
        text1.click();
        document.getElementById('text1').style.color = colors[i];
        i++;
        if (i >= colors.length) {
            i = 0;
        }
        let color = text1.style.color;
        expect(color).toBe('magenta');
    })

    test('expect color in text1 is cyan', () => {
        text1.click();
        document.getElementById('text1').style.color = colors[i];
        i++;
        if (i >= colors.length) {
            i = 0;
        }
        let color = text1.style.color;
        expect(color).toBe('cyan');
    })

    test('expect color in text2 is magenta', () => {
        text2.click();
        document.getElementById('text2').style.color = colors[j];
        j++;
        if (j >= colors.length) {
            j = 0;
        }
        let color = text2.style.color;
        expect(color).toBe('magenta');
    })

    test('expect color in text2 is cyan', () => {
        text1.click();
        document.getElementById('text2').style.color = colors[j];
        j++;
        if (j >= colors.length) {
            j = 0;
        }
        let color = text2.style.color;
        expect(color).toBe('cyan');
    })

    test('expect color in text3 is magenta', () => {
        text3.click();
        document.getElementById('text3').style.color = colors[y];
        y++;
        if (y >= colors.length) {
            y = 0;
        }
        let color = text3.style.color;
        expect(color).toBe('magenta');
    })

    test('expect color in text3 is cyan', () => {
        text3.click();
        document.getElementById('text3').style.color = colors[y];
        y++;
        if (y >= colors.length) {
            y = 0;
        }
        let color = text3.style.color;
        expect(color).toBe('cyan');
    })

})