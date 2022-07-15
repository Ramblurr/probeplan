import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const SongList = (props) => {
  const { songs = [] } = props;
  const songButton = (props) => {
    const { name, selected = false } = props;
    const selectedClass = selected ? "border-green-200" : "border-gray-200"
    const cn = "rounded border-4 mx-0 my-1 p-2 " + selectedClass;
    return (
      <li key={name} className={cn}>{name}</li>
    )
  }

  return (
    <ul className="p-0 m-0">{songs.map(song => songButton(song))}</ul>
  )
}
const Home: NextPage = () => {

  const songs = [
    { name: "A Night in Tunisia", selected: false },
    { name: "Rasta Funk", selected: true },
    { name: "YMYL", selected: false }
  ]
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>asdasdd Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <SongList songs={songs} />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
