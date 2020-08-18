interface Props {
  nickName: string
  todoTitle?: string
}

export default function TimeLineCell(props: Props) {
  return (
    <div className='container'>
      <div className='cell'>
        <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ margin: 0 }}>{props.nickName}</p>
        </div>
        <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ margin: 0 }}>{props.todoTitle}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
        }
        .cell {
          height: 50px;
          display: flex;
          margin-bottom: 5px;
          border-radius: 10px;
          background-color: pink;
        }
      `}</style>
    </div>
  )
}
