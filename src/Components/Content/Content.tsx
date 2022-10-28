import Slider from "./slider/slider"
import styles from '../../styles/Content/content.module.css'
import FilmsSlider from "./slider/FilmsSlider"
import { useState } from "react"
import store, { RootState } from "../../rtk/store"
import { useAppSelector } from "../../rtk/hooks"
import AuthModal from "../Modals/SignUpPlease"

const Content = () => {

    const {modals} = useAppSelector<RootState>(store.getState)

    return (
        <div className={styles.content}>
            {modals.WatchMovie && (
                <AuthModal />
            )}
            <span className={styles.contentHeaderTitle}>Watch movies online</span>
            <section>
                <Slider/>
            </section>
            <FilmsSlider />
            <FilmsSlider />
        </div>
    )
}

export default Content