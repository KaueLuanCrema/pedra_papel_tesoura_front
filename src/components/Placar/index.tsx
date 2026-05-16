export function Placar() {
    return (<div className="scoreboard">

        <div className="score">
            <h2>Jogador</h2>
            <p id="playerScore">0</p>
        </div>

        <div className="score">
            <h2>CPU</h2>
            <p id="enemyScore">0</p>
        </div>

    </div>)
}