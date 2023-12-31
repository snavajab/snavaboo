"use client"

import { FC, useState } from "react"
import { SnavabooEntry } from "./page"

export const Game: FC<{ entries: SnavabooEntry[] }> = ({ entries }) => {
  const [idx, setIdx] = useState(0)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "400px",
        justifyContent: "center",
        flex: 1,
        width: "100%",
        padding: "32px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {entries[idx].word}
      </h1>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {entries[idx].taboo.map(word => (
          <p
            style={{
              margin: "4px 0",
              fontSize: "1.1em",
              textAlign: "center",
            }}
            key={word}
          >
            {word}
          </p>
        ))}
      </div>
      <button
        style={{
          padding: "16px 32px",
          alignSelf: "stretch",
          borderRadius: "4px",
          backgroundColor: "#F3BC00",
          border: "none",
          outline: "none",
          cursor: "pointer",
          color: "#0f1722",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
        onClick={() => {
          setIdx(idx + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}
