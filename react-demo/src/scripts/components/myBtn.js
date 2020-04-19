

export default class MyBtn extends Component{
    render(){
        const {
            onClick,
            style,
            text,
            disabled,
            className
        } = this.props;
        return (
            <button 
                onClick={onClick}
                style={style}
                disabled={disabled}
                className={"my-btn " + className}
            > {text} </button>
        )
    }
}