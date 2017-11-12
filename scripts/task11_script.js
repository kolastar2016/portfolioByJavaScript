function Task11() {
    var str = 'Добавить в стандартный встроенный объект String метод, обрезающий строку, если ее длина более 30 символов и добавляющий в конец';
    var res = str.substring(0, 30);
    document.getElementById("write_task11").innerHTML = res +'...';
}