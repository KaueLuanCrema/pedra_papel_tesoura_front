import { Jogador } from "./Jogador"
import { Inimigo } from "./Inimigo"

export function Arena() {
    return ( <div className="arena">

            {/* <!-- JOGADOR --> */}
            <Jogador/>

            <div className="vs">VS</div>

            {/* <!-- INIMIGO --> */}
            <Inimigo/>

        </div>


    )
}