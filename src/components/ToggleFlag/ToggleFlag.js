import Button from "@material-ui/core/Button";

const ToggleFlag = (props) => {
    return (
        <div>
            <Button onClick={(e) => {
                e.preventDefault();
                props.event(e);
            }}>{props.toggleFlag ? "Flag" : "Click"}</Button>
        </div>
    )
}

export default ToggleFlag;