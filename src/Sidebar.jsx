import React from 'react'
import './sidebar.css'
import SidebarOption from './SidebarOption'
import { useStateValue } from './StateProvider'
import {HomeOutlined, SearchOutlined, LibraryMusicOutlined} from '@material-ui/icons'
const Sidebar = () => {
  const [{playlists}, dispatch] = useStateValue()
  console.log(playlists,'te');
  return (
    <div className='sidebar'>
        <img className='sidebar__logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
        <SidebarOption   Icon={HomeOutlined} title="Home" />
        <SidebarOption   Icon={SearchOutlined} title="Search" />
        <SidebarOption   Icon={LibraryMusicOutlined} title="Your Library" />
          <br />
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr />
        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}
         
   
    </div>
  )
}

export default Sidebar