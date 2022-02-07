

function OptionDropDown(props) {
    return (
        <div>
        <h6>{props.label}:</h6>
        <select className='option_drop_down text_styles' id={props.id} onChange={props.onChange}>
            {props.options.map((option) => {
                return <option key={option} value={option}>{option}</option>
            })}
        </select>
        </div>
    )
}

export { OptionDropDown }