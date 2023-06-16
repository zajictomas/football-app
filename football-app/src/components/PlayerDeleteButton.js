import "./PlayerDeleteButton.css"

const PlayerDeleteButton = (props) => {
    return (
        <button className="player-delete-button" onClick={props.deletePlayer}>Vymazat hráče</button>
    )
}

export default PlayerDeleteButton