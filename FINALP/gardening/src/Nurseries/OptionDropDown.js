

function OptionDropDown(props) {
    return (
        <select className='option_drop_down text_styles' id={props.id} onChange={props.onChange}>
            {props.options.map((option) => {
                return <option key={option} value={option}>{option}</option>
            })}
        </select>
    )
}

export { OptionDropDown }