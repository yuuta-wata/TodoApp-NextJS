import { useRouter } from 'next/router'
import Link from 'next/link'

export default function test() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <p>page: {id}</p>
      <Link href={`/${id}`} >
        <a>{`${id}ページへいく`}</a>
      </Link>
    </div>
  )
}