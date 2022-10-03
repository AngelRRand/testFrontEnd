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
            const res = await axios.get('https://servicepad-post-api.herokuapp.com/articles/').reverse()
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
            dispatch({
                type: GET_LAST_ARTICLES,
                payload: sort
            })
        } catch (error) {
            console.log(error)
        }
    }

    const postArticle = async (payload) => {
        
        try {
            const res = await axios.post('https://servicepad-post-api.herokuapp.com/articles/', payload)
            console.log(res)
            return res
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ArticleContext.Provider value={{
            articles: state.articles,
            lastArticles: state.lastArticles,
            getArticles,
            getLastArticles,
            postArticle
        }}>
            {props.children}
        </ArticleContext.Provider>
    );
}

export default ArticleState

