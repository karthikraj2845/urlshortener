"use client"
// import { Code } from 'mongodb'
import Link from 'next/link'
import React, { useState } from 'react'

const shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    // const handleChange = {e => {seturl(e.target.value)}}
    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => 
                {alert(result.message)
                console.log(result)
                setgenerated(`${window.location.origin}/${shorturl}`)
                seturl("")
                setshorturl("")
            }).catch((error) => console.error(error));
    }
    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col'>
            <h1 className='font-bold text-2xl mx-4 '>Generate your URLs</h1>
            <div className='flex flex-col'>
                <input type="text" value={url} className=' mt-2 p-4 focus:outline-purple-600 rounded-md' placeholder='Enter your url' onChange={e => { seturl(e.target.value) }} />
                <input type="text" value={shorturl} className='p-4  focus:outline-purple-600 rounded-md'
                    placeholder='Enter your preferred short URL text' onChange={e => { setshorturl(e.target.value) }} />
                <button className=' bg-purple-500 rounded-lg  text-white mt-4 p-4 focus:outline-purple-600 rounded-b-2xl' onClick={generate}>Generate</button>

            </div>
            {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
                </code></>}

        </div>
    )
}

export default shorten
