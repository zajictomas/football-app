import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
    return (
        <button className="main-delete-button" onClick={props.deletePlayers}>Vymazat všechny hráče</button>
    )
}

export default AllDeleteButton