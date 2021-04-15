import Tile from "../Tile/Tile";

const Board = (props) => {
    return (
        <div className="board">
            {props.tiles.map(tile =>
                <Tile 
                    key={tile.tIndex}
                    i={tile.tIndex} 
                    x={tile.coord.x} 
                    y={tile.coord.y} 
                    variant={props.tileDetails.variant}
                    color={props.tileDetails.color}
                    mine={tile.mine}
                    nearby={tile.nearby}
                    disabled={tile.disabled}
                    event={props.event}
                    flag={tile.flag}
                    toggleFlag={props.toggleFlag}
                    board={props.board}
                    />
            )}
        </div>
    );
}

export default Board;