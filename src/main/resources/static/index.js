const templateGame = (id, number) => `<a href="/rooms/${id}" class="chess-game"><div class="chess-game-title">체스 게임 ${number}</div></a>`;

const chessGamesElement = document.querySelector('.chess-games');
const chessCreateElement = document.querySelector('.chess-create');

chessCreateElement.onclick = () => {
    fetch('/rooms', {
        method: 'POST'
    }).then(response => response.json())
        .then(data => {
            if (data.statusCode === 1) {
                location.replace(`/rooms/${data.dto}`)
            }
        })
};

fetch('/rooms')
    .then(response => response.json())
    .then(data => drawGameList(data.dto));

function drawGameList(games) {
    games.forEach((id, number) => chessGamesElement.innerHTML += templateGame(id, number + 1))
}