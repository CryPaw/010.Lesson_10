function creatingArray() { 
    let count = (prompt("Введите количество элементов массива: "));
    let mas = [];
    for (let i = 0; i <= count; i++){
        let elem = prompt("Введите элемент")
        mas.push(elem)
    }
        mas.sort()
        mas.splice(1, 3)
    return mas
}

let arr = 0;

alert(creatingArray(arr));
