import "./Player.css"
import data from "../data"
import PlayerDeleteButton from "./PlayerDeleteButton"
import AllDeleteButton from "./AllDeleteButton"
import ReloadPlayersButton from "./ReloadPlayersButton"
import { useState } from "react"

const Player = () => {
    const [playerList, setPlayerList] = useState(data)

    const deleteOnePlayer = (idecko) => {
        const filteredPlayers = playerList.filter( (onePlayer) => {
            return onePlayer.id !== idecko
        })
        setPlayerList(filteredPlayers)
    }

    const deleteAllPlayers = () => {
        setPlayerList([])
    }

    const reloadAllPlayers = () => {
        setPlayerList(data)
    }

    return <section>
        <div className="all-players">
            {
                playerList.map( (onePlayer) => {
                    const {id, image, firstName, secondName, number, position} = onePlayer
                    return <div className="one-player" key={id}>
                        <img src={image} alt="" />
                        <h2>Jméno: {firstName}</h2>
                        <h2>Příjmení: {secondName}</h2>
                        <p>Číslo: {number}</p>
                        <p>Pozice: {position}</p>
                        <PlayerDeleteButton deletePlayer={ () => deleteOnePlayer(id) }/>
                    </div>
                })
            }
        </div>
        <div className="button-box">
            <AllDeleteButton deletePlayers={deleteAllPlayers}/>
            <ReloadPlayersButton reloadPlayers={reloadAllPlayers}/>
        </div>
    </section>
}

export default Player