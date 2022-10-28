import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IAllFilms, IFavoritesFilms } from "../../Types/types";

interface IState {
    favoriteFilms: IFavoritesFilms[],
    allFilms: IAllFilms[],
    currentFilm: IFavoritesFilms | null
    errors: string | null
}

const initialState: IState = {
    favoriteFilms: [],
    allFilms: [
        {"id": 1, "image": "https://i.ibb.co/MG570tv/avatar.webp", "url": "https://www.youtube.com/watch?v=CYYtLXfquy0&ab_channel=TrailerSpot", "title": "Avatar", "genres": "Aventure, Fantasy", "rating": 4.0},
        {"id": 2, "image": "https://i.ibb.co/42YfxC1/johnWick.jpg", "url": "https://www.youtube.com/watch?v=2AUmvWm5ZDQ&ab_channel=LionsgateMovies", "title": "John Wick", "genres": "Action, Mystery & thriller", "rating": 3.3},
        {"id": 3, "image": "https://i.ibb.co/RbBBjSW/p-encanto-homeent-22359-4892ae1c.jpg", "url": "https://www.youtube.com/watch?v=CaimKeDcudo&ab_channel=WaltDisneyAnimationStudios", "title": "Encanto", "genres": "Kids & family, Comedy", "rating": 5.0},
        {"id": 4, "image": "https://i.ibb.co/G29C8zy/MV5-BN2-Ew-M2-I5-OWMt-MGQy-Mi00-Zjg1-LWJk-NTct-ZTdj-YTA4-OGUw-Zj-My-Xk-Ey-Xk-Fqc-Gde-QXVy-MTMx-ODk2.jpg", "url": "https://www.youtube.com/watch?v=JfVOs4VSpmA", "title": "Mad Max", "genres": "Kids & family, Comedy", "rating": 0},
        {"id": 5, "image": "https://i.ibb.co/7zX6p5h/spider-mannowayhome-lob-crd-03.jpg", "url": "https://www.youtube.com/watch?v=JfVOs4VSpmA&ab_channel=SonyPicturesEntertainment", "title": "Spider Man: no way home", "genres": "Kids & family, Comedy", "rating": 0},
        {"id": 6, "image": "https://i.ibb.co/5YJTPLz/Assassin-s-Creed-poster.jpg", "url": "https://www.youtube.com/watch?v=xzCEdSKMkdU&ab_channel=Ubisoft", "title": "Assassin's Creed", "genres": "Kids & family, Comedy", "rating": 0},
    ],
    currentFilm: null,
    errors: null
}

const films = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addCurrentFilm: (state, action) => {
            state.currentFilm = action.payload
        },
        addToFavorites: (state, action) => {
            const foundFilm = state.favoriteFilms.find(el => el.id === action.payload.id)

            if(!foundFilm) state.favoriteFilms.push(action.payload)

            else {
                state.errors = 'Film is already exist'
            }
        },
        deleteFavorites: (state, action) => {
            state.favoriteFilms = state.favoriteFilms.filter(el => action.payload !== el.id)
        }
    },
    extraReducers: {

    }
})

export const {addCurrentFilm, addToFavorites, deleteFavorites} = films.actions
export default films.reducer