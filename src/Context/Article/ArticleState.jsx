import React, { useReducer } from 'react'
import ArticleReducer from './ArticleReducer'
import ArticleContext from './ArticleContext'
import { GET_ARTICLES, GET_LAST_ARTICLES } from '../types'
import axios from 'axios'

const ArticleState = (props) => {

    const initialState = {
        articles: [],
    }

    const [state, dispatch] = useReducer(ArticleReducer, initialState)

    const getArticles = async () => {
        try {
            const res = await axios.get('https://servicepad-post-api.herokuapp.com/articles/')
            const data = res.data.data
            const articles = data.reverse()
            dispatch({
                type: GET_ARTICLES,
                payload: articles
            })
        } catch (error) {
            console.log(error)
        }

    }
    

    const postArticle = async (payload) => {
        
        try {
            const res = await axios.post('https://servicepad-post-api.herokuapp.com/articles/', payload)
            return res
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ArticleContext.Provider value={{
            articles: state.articles,
            getArticles,
            postArticle
        }}>
            {props.children}
        </ArticleContext.Provider>
    );
}
export default ArticleState

