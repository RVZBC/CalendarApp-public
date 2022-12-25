import '../filterTask/FilterTask.css';


export default function FilterTask (props) {

    function onFilterValueChange(e) {        
        props.filterValueSelected(e.target.value)
    }

    return (
        <div className="filter">
            <select name="status" onChange={onFilterValueChange}>
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="on-going">On-going</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    )
}