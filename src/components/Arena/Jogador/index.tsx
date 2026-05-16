export function Jogador() {
    return (
            <div className="fighter">

                <h2>Você</h2>

                {/* <!-- personagem --> */}
                <svg viewBox="0 0 200 200">

                    <circle cx="100" cy="60" r="40" fill="#38bdf8" />

                    <rect x="65" y="105" width="70" height="70" rx="10" fill="#38bdf8" />

                </svg>

                <p id="playerChoice">?</p>

            </div>

    )
}