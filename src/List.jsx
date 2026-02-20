import "./List.css"

function List(props) {

    const listItems = props.items;

    const itemList = listItems.map(item => <>
        <li key={item.id}>
            {item.name}, {item.calories} cal
        </li><hr />
    </>
    )

    return (
        <>
            <div className="container">
                <h1>{props.category}</h1>
                <ul>
                    {itemList}
                </ul>
            </div>
        </>
    )
}

export default List
