import Button from "@material-ui/core/Button";

const Tile = (props) => {
    return (
        <div className="tile">
            <Button 
                variant={props.variant} 
                color={props.flag ? "secondary" : "primary"}
                disabled={props.disabled}
                onClick={(e) => {
                    if(!props.flag) {
                        e.preventDefault();
                        props.event(e, props.i, props.board);
                    } else {
                        if(props.toggleFlag) {
                            props.event(e, props.i);
                        }
                    }
                    }
                }
            >{props.mine ? "m" : props.nearby ? `${props.nearby}` : "0"}</Button>
        </div>
    );
}

export default Tile;