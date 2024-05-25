const createBoard = () => {
    const myBoard = document.getElementById('myBoard');
    let result = "";
    for (let row = 1; row <= 10; row++) {
        result += "<tr>";
        for (let col = 1; col <= 10; col++) {
            result += `<td>${row * col}</td>`;
        }
        result += "</tr>";
    }
    myBoard.innerHTML = result;
}

createBoard();
