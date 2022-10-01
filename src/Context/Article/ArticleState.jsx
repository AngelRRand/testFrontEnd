import React, {useReducer} from 'react'
import ArticleReducer from './ArticleReducer'
import ArticleContext from './ArticleContext'
import { GET_ARTICLES } from '../types'
import axios from 'axios'
const ArticleState = (props) => {

    const initialState = {
        articles: []
    }

    const [state, dispatch] = useReducer(ArticleReducer, initialState)

    const getArticles = async () =>{
        const res = await axios.get('https://servicepad-post-api.herokuapp.com/articles/')
        dispatch({
            type: GET_ARTICLES,
            payload: res.data.data
        })
    }
    return (
        <ArticleContext.Provider value={{
            articles: state.articles,
            getArticles,
        }}>
            {props.children}
        </ArticleContext.Provider>
    );
}

export default ArticleState

