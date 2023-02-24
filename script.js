let arr = prompt('Введите массив')
    arr = (""+arr).split("").map(String)
    arr.sort()
    arr.splice(1, 3)

    alert(arr)
