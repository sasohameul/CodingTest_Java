const solution = (numbers) => {

    let answer = '';

    let map = new Map();

    map.set('one','1');
    map.set('two','2');
    map.set('three','3');
    map.set('four','4');
    map.set('five','5');
    map.set('six','6');
    map.set('seven','7');
    map.set('eight','8');
    map.set('nine','9');
    map.set('zero','0');

    let currentNumber = '';

    for (let i = 0; i < numbers.length; i++) {

        currentNumber += numbers[i];

        if (map.has(currentNumber)) {

            answer += map.get(currentNumber);
            currentNumber = '';
        }
    }
    
        return Number(answer);
    }