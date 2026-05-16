import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Placar} from "./components/Placar"
import { Arena } from './components/Arena';

function App() {
  return (
        <div className="game">

        <h1>✊ Pedra Papel Tesoura ✋</h1>
        <Placar/>

        {/* <!-- ARENA --> */}
       <Arena/>
       
        {/* <!-- ESCOLHAS --> */}
        <div className="choices">

            {/* <!-- PEDRA --> */}
            <button className="choice-btn" onClick={() =>"play('pedra')"}>

                <svg viewBox="0 0 120 120">

                    <ellipse cx="60" cy="95" rx="30" ry="10" fill="rgba(0,0,0,0.15)" />

                    <rect x="28" y="40" width="64" height="45" rx="16" fill="#FACC15" />

                    <rect x="28" y="24" width="13" height="22" rx="6" fill="#FBBF24" />

                    <rect x="43" y="20" width="13" height="26" rx="6" fill="#FBBF24" />

                    <rect x="58" y="20" width="13" height="26" rx="6" fill="#FBBF24" />

                    <rect x="73" y="24" width="13" height="22" rx="6" fill="#FBBF24" />

                    <rect x="15" y="48" width="20" height="16" rx="8" fill="#EAB308" />

                </svg>

                <span>Pedra</span>

            </button>

            {/* <!-- PAPEL --> */}
            <button className="choice-btn" onClick={()=>"play('papel')"}>

                <svg viewBox="0 0 120 120">

                    <ellipse cx="60" cy="102" rx="26" ry="8" fill="rgba(0,0,0,0.15)" />

                    <rect x="35" y="42" width="50" height="50" rx="12" fill="#FACC15" />

                    <rect x="35" y="5" width="10" height="45" rx="5" fill="#FBBF24" />

                    <rect x="48" y="0" width="10" height="50" rx="5" fill="#FBBF24" />

                    <rect x="61" y="0" width="10" height="50" rx="5" fill="#FBBF24" />

                    <rect x="74" y="5" width="10" height="45" rx="5" fill="#FBBF24" />

                    <rect x="20" y="52" width="20" height="12" rx="6" transform="rotate(-25 20 52)" fill="#EAB308" />

                </svg>

                <span>Papel</span>

            </button>

            {/* <!-- TESOURA --> */}
            <button className="choice-btn" onClick={()=>"play('tesoura')"}>

                <svg viewBox="0 0 120 120">

                    <ellipse cx="60" cy="100" rx="26" ry="8" fill="rgba(0,0,0,0.15)" />

                    <rect x="38" y="5" width="12" height="60" rx="6" transform="rotate(-10 38 5)" fill="#FBBF24" />

                    <rect x="68" y="5" width="12" height="60" rx="6" transform="rotate(10 68 5)" fill="#FBBF24" />

                    <rect x="38" y="52" width="45" height="38" rx="12" fill="#FACC15" />

                    <rect x="48" y="45" width="10" height="20" rx="5" fill="#EAB308" />

                    <rect x="60" y="45" width="10" height="20" rx="5" fill="#EAB308" />

                    <rect x="24" y="58" width="18" height="12" rx="6" fill="#CA8A04" />

                </svg>

                <span>Tesoura</span>

            </button>

        </div>

        {/* <!-- RESULTADO --> */}
        <div className="result" id="result">
            Escolha uma opção
        </div>

    </div>
  );
}

export default App;
