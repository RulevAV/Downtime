import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { json } from 'node:stream/consumers'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import jwt from "jsonwebtoken";
import { AuthAPI } from "../api/api";


const Profile: NextPage = () => {


  async function submitForm() {
    AuthAPI.Profile();
    // const res = await fetch('/api/secret', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": 'application/json'
    //   },
    //   body: JSON.stringify({ token })
    // }).then((t) => t.json())


  }
  return (
    <div>
      <h1>Profile</h1>
      <input type="button" value={"login"} onClick={submitForm} />
    </div>

  )
}

export default Profile
