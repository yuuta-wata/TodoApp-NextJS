interface Props {
  nickName: string
  todoList: {
    id: string
    item: string
  }[]
}

export default function TimeLineCell(props: Props) {
  return (
    <div className='container'>
      {props.todoList.map(({ id, item }) => (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} key={id}>
          <p style={{margin: 0}}>{props.nickName}</p>
          <p style={{margin: 0}}>{item}</p>
        </div>
      ))}
      <style jsx>{`
        .container {
        }
      `}</style>
    </div>
  )
}
