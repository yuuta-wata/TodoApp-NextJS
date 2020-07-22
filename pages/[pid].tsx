import {useRouter} from 'next/router'
import Link from 'next/link'

export default function test () {
  const router = useRouter()
  const {pid} = router.query
  
return (
<div>
  <p>page: {pid}</p>
  <Link href={`/${pid}`} >
    <a>{`${pid}ページへいく`}</a>
  </Link>
</div>
) 
}