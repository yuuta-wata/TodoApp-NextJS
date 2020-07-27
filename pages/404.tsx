import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <h2>そのページは存在しません。</h2>
      <Link href="/">
        <a>Topページへ戻る</a>
      </Link>
    </div>
  )
}