import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styles from '../../styles/Twitch/Twitch.module.css'
import SidebarMenu from '../sidebars/SidebarMenu/SidebarMenu'
import SidebarSearch from '../sidebars/SidebarSearch/SidebarSearch'

const Twitch = () => {

    const [channel, setChannel] = useState<string>('jesusavgn')

    return (
        <div className={styles.twitch}>
            <SidebarMenu />
            <div className={styles.TwitchContent}>
                <input onChange={e => setChannel(e.target.value)} className={styles.twitchSearch} type="text" placeholder='Search channel...'/>
                <ReactPlayer 
                    url={`https://www.twitch.tv/${channel}`}
                />

            </div>
            <SidebarSearch />
        </div>
    )
}

export default Twitch