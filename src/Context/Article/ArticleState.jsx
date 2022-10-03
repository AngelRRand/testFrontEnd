import React, { useReducer } from 'react'
import ArticleReducer from './ArticleReducer'
import ArticleContext from './ArticleContext'
import { GET_ARTICLES, GET_LAST_ARTICLES } from '../types'
import axios from 'axios'
const ArticleState = (props) => {

    const initialState = {
        articles: [],
        lastArticles: []
    }

    const [state, dispatch] = useReducer(ArticleReducer, initialState)

    const getArticles = async () => {
        try {
            const res = await axios.get('https://servicepad-post-api.herokuapp.com/articles/')
            dispatch({
                type: GET_ARTICLES,
                payload: res.data.data
            })
        } catch (error) {
            console.log(error)
        }

        //console.log(res)

    }
    const getLastArticles = async () => {
        try {
            const res = await axios.get('https://servicepad-post-api.herokuapp.com/articles/')
            const lastDay = res.data.data
            const sort = await lastDay.slice(lastDay.length - 4).reverse()
            //console.log(res)
            dispatch({
                type: GET_LAST_ARTICLES,
                payload: sort
            })
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <ArticleContext.Provider value={{
            articles: state.articles,
            lastArticles: state.lastArticles,
            getArticles,
            getLastArticles
        }}>
            {props.children}
        </ArticleContext.Provider>
    );
}

export default ArticleState

