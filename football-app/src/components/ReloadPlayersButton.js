import "./ReloadPlayersButton.css"

const ReloadPlayersButton = (props) => {
    return (
        <button className="reload-players-button" onClick={props.reloadPlayers}>Nahrát všechny hráče</button>
    )
}

export default ReloadPlayersButton