
interface Props {
    nickName: string
    todoList: {
        id: string
        item: string
    }[]
}

export default function TimeLineCell(props:Props) {
    return (
        <div>
            {props.todoList.map(({id, item}) => (
                <div key={id}>
                    <p>{props.nickName}</p>
                    <div>{item}</div>
                </div>
            ))}
        </div>
    )
}