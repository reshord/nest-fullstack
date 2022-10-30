import Slider from "./slider/slider"
import styles from '../../styles/Content/content.module.css'
import FilmsSlider from "./slider/FilmsSlider"
import { useEffect, useState } from "react"
import store, { RootState } from "../../rtk/store"
import { useAppDispatch, useAppSelector } from "../../rtk/hooks"
import AuthModal from "../Modals/SignUpPlease"
import { getFilms } from "../../rtk/axios"

const Content = () => {

    const {modals} = useAppSelector<RootState>(store.getState)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFilms())
    }, []);

    return (
        <div className={styles.content}>
            {modals.WatchMovie && (
                <AuthModal />
            )}
            <span className={styles.contentHeaderTitle}>Watch movies online</span>
            <section>
                <Slider/>
            </section>
            <FilmsSlider sliderTitle={'Discovery'} />
            <FilmsSlider sliderTitle={'Fresh movies'}/>
        </div>
    )
}

export default Content