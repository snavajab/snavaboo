import fs from "fs/promises"
import { parse } from "csv/sync"
import path from "path"
import { useState } from "react"
import { Game } from "./Game"
import Image from "next/image"

function shuffle<T = unknown>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

type Record = {
  "Informazioni cronologiche": string
  "Parola da inserire :": string
  "Parole da non utilizzare per far indovinare la parola in questione": string
}

export type SnavabooEntry = {
  date: string
  word: string
  taboo: string[]
}

export default async function Home() {
  const csv = await fs.readFile(
    path.join(process.cwd(), "src", "snavaboo.csv"),
    "utf-8"
  )
  const entries: SnavabooEntry[] = parse(csv, {
    columns: true,
    skip_empty_lines: true,
  }).map((record: Record) => {
    const str =
      record[
        "Parole da non utilizzare per far indovinare la parola in questione"
      ]

    const taboo = str.includes(",")
      ? str.split(",")
      : str.includes("\n")
      ? str.split("\n")
      : str.split("/")

    return {
      date: record["Informazioni cronologiche"],
      word: record["Parola da inserire :"],
      taboo: taboo.map(word => word.trim()),
    }
  })

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100dvh",
        fontSize: "1.5rem",
        color: "white",
        backgroundColor: "#0f1722",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Image
          style={{ borderRadius: "50%" }}
          src="logo.svg"
          width={42}
          height={42}
          alt=""
        />
        <h4 style={{ color: "#F3BC00" }}>Snavaboo</h4>
      </div>
      <Game entries={shuffle(entries)} />
    </main>
  )
}
