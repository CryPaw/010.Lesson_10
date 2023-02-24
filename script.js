let array = prompt('Введите массив через пробел :');
array = array.trim().split(/\s+/);
array.sort((a, b) => a - b);
array.splice(1, 3);

document.write('Ваш массив :\n' + array);
