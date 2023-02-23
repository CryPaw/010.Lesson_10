let start = prompt();
    let result = [];
    while (start >= 0) {
      result.push(start--);
      result.sort((a, b) => a - b);
    }
    result.splice(1, 3);
    document.write('[ ' + result + ' ]');
