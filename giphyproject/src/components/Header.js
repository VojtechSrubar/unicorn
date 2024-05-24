import React from 'react'
import "./Header.css"
//import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Header() {
  return (
    <div className='header'>
        <img src="./images/giphyLogo.png" alt="logo" />
        <div className='menu'>
            <h2>Reakce</h2>
            <h2>Zábava</h2>
            <h2>Sporty</h2>
            <h2>Stickery</h2>
            <h2>Umělci</h2>
            
        </div>
    <div className='button'>
    <h2>Upload</h2>
    </div>
    <div className='button'>
        <h2>Create</h2>
    </div>
    <div className='profile'>
        <img src="./images/avatar.png" alt="avatar"/>
        <h2>Vojta</h2>
        <h2>Key</h2>
    </div>
    </div>
  )
}