export function Inimigo() {
    return (<div className="fighter">

                <h2>CPU</h2>

                {/* <!-- inimigo --> */}
                <svg viewBox="0 0 200 200">

                    <circle cx="100" cy="60" r="40" fill="#ef4444" />

                    <polygon points="60,180 140,180 100,100" fill="#ef4444" />

                </svg>

                <p id="enemyChoice">?</p>

            </div>

    )

}