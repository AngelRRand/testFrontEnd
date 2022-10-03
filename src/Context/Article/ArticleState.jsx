import React, { useReducer } from 'react'
import ArticleReducer from './ArticleReducer'
import ArticleContext from './ArticleContext'
import { GET_ARTICLES, SAVE_ARTICLE } from '../types'
import axios from 'axios'

const ArticleState = (props) => {

    const initialState = {
        articles: [],
        infoarticle: []
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
    const putArticle = async (payload, id) =>{
        try {
            const res = await axios.post(`https://servicepad-post-api.herokuapp.com/articles/${id}`, payload)
            return res
        } catch (error) {
            console.log(error)
        }
    }
    const getInfoArticle = (payload) =>{
        console.log(payload, 'desde state')
        try {
            dispatch({
                type: SAVE_ARTICLE,
                payload: payload
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <ArticleContext.Provider value={{
            articles: state.articles,
            infoarticle: state.infoarticle,
            getArticles,
            postArticle,
            putArticle,
            getInfoArticle
        }}>
            {props.children}
        </ArticleContext.Provider>
    );
}
export default ArticleState

