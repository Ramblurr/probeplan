import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import { createSecureContext } from 'tls';

const songTitles = [
  "Asterix",
  "Bella Ciao",
  "Cumbia Sobre el Mar",
  "Der Zug um 7.40",
  "Grenzrenner",
  "Inner Babylon",
  "Kids Aren't Alright",
  "Klezma 34",
  "Laisse Tomber Les Filles",
  "L’estaca del pueblo",
  "Metanioa",
  "Monkeys Rally",
  "Montserrat Serrat",
  "Rasta Funk",
  "Tammurriata Nera",
  "Tschufittl Cocek",
  "You Move You Lose",
]

const _songs = songTitles.map(title => ({ name: title, selected: 0 }));

const SongButton = (props) => {
  const { toggleSong, song } = props;
  const { name, selected = false } = song;

  const handleClick = () => {
    toggleSong(name);
  }
  let selectedClass = "border-gray-200";
  if (selected === 1) 
    selectedClass = "border-green-200";
  else if (selected === -1)
    selectedClass = "border-red-200";
  const cn = `rounded border-4 mx-0 my-1 p-2 block basis-1/2  ${selectedClass}`;
  return (
    <li className={cn} onClick={handleClick}>{name}</li>
  )
}


const SongList = (props) => {
  const { songs = [], toggleSong } = props;
  return (
    <ul className="p-0 m-0     flex  flex-wrap">{
      songs.map(song =>
        (<SongButton key={song.name} song={song} toggleSong={toggleSong} />)
      )}</ul>
  )
}
const Home: NextPage = () => {


  const [songs, setSongs] = useState(_songs);
  
  const rotate = (current) => {
    switch (current) {
      case -1:
        return 0;
      case 0:
        return 1;
      case 1:
        return -1;
    }
}

  const toggleSong = (toggledName: string) => {
    const newSongs = songs.map(({ name, selected }) => {
      if (name === toggledName)
        return { name, selected: rotate(selected) }
      else
        return { name, selected }
    })
    setSongs(newSongs);
  }
  return (
    <div className="min-h-screen">
      <Head>
        <title>Probeplan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col w-full">
        <SongList songs={songs} toggleSong={toggleSong} />
        <button
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save
      </button>
      </main>

    </div>
  )
}

export default Home
