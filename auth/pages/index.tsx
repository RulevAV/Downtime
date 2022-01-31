import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { json } from 'node:stream/consumers'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import jwt from "jsonwebtoken";


const Home: NextPage = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  async function submitForm() {
    const res = await fetch('/api/login', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then((t) => t.json())

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };

      const res = await fetch('/api/secret', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({ token })
      }).then((t) => t.json())

      if (res.secretAdminCode) {
        setMessage(res.secretAdminCode);
      } else {
        setMessage("NOTHING AVAILABEL");
      }

      //setMessage(`welcome ${json.username} and you are ${json.admin ? 'an admin' : "not an admin"}`);
    }
    else {
      setMessage("Somothing went wrong");

    }
  }
  return (
    <div>
      <h1>{message}</h1>
      <form method='post' action='/api/login'>
        <input type={"text"} name="username" value={username} onChange={e => { setUsername(e.target.value) }} />
        <br />
        <input type={"password"} name="password" value={password} onChange={e => { setPassword(e.target.value) }} />
        <br />
        <input type="button" value={"login"} onClick={submitForm} />
      </form>
    </div>

  )
}

export default Home
