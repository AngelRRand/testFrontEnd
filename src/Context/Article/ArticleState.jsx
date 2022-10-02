import React, {useReducer} from 'react'
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

    const getArticles = async () =>{
        const res = await axios.get('https://servicepad-post-api.herokuapp.com/articles/')
        //console.log(res)
        dispatch({
            type: GET_ARTICLES,
            payload: res.data.data
        })
    }
    const getLastArticles = async () =>{
        const res = await axios.get('https://servicepad-post-api.herokuapp.com/articles/')
        const lastDay = res.data.data
        const sort = await lastDay.slice(lastDay.length-5).reverse()
        console.log(sort, 'va')
        //console.log(res)
        dispatch({
            type: GET_LAST_ARTICLES,
            payload: sort
        })
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

