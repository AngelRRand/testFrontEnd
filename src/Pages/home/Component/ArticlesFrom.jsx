import React, { useState, useContext, useEffect } from 'react';
import './../../../Styles/home/FormStyles.css';
import ArticleContext from '../../../Context/Article/ArticleContext';
function validateForm(input) {
    let errors = {};


    if (!input.author) {
        errors.author = "You must type a author";
    } else if (!input.author.match(/^[A-Za-z\s]+$/)) {
        errors.author = "The author does not admit numbers";
    } else if (input.author.length < 3 || input.author.length > 50) {
        errors.author = "Required, Length between 3 and 50";
    }
    else {
        errors.author = "";
    }

    if (!input.title) {
        errors.title = "You must type a title";
    } else if (input.title.length < 3 || input.title.length > 50) {
        errors.title = "Required, Length between 3 and 50";
    }
    else {
        errors.title = "";
    }

    if (!input.content) {
        errors.content = "You must type a content";
    } else if (input.content.length < 3 || input.content.length > 50) {
        errors.content = "Required, Length between 3 and 50";
    }
    else {
        errors.content = "";
    }
    return errors;
}

const ArticlesFrom = () => {
    const { postArticle, infoArticle, putArticle, deletInfoArticle, getArticles} = useContext(ArticleContext)
    const [error, setErrors] = useState('');
    const [input, setInput] = useState({
        author: '',
        title: '',
        content: ''
    })
    useEffect(() => {

        if(infoArticle.length > 0){
            //let {author} = infoArticle
            setInput({
                author: infoArticle[0].author,
                title: infoArticle[0].title,
                content: infoArticle[0].content,
            })

        }
    }, [infoArticle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !error.author &&
            !error.title &&
            !error.content
        ){
            if(infoArticle.length > 0){
                alert("Your article has been update successfully");
                putArticle(input, infoArticle[0].id)
                deletInfoArticle()
                getArticles()
                setInput({
                    author: "",
                    title: "",
                    content: "",
                });
                return
            }else{
                alert("Your article has been created successfully");
                postArticle(input);
                getArticles()
                setInput({
                    author: "",
                    title: "",
                    content: "",
                });
                return
            }
        } else {
            return alert("It was not possible to create the dog.");
        }
    };
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            validateForm({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    };

    return (
        <>
        <form onSubmit={(e) => handleSubmit(e)} className='containerFormArticles'>
            <div className='divForm'>
                <div className='labelSpanForm'>
                    <label htmlFor='author'>Author</label>
                    <span>{error.author}</span>
                </div>
                <input
                    type="text"
                    value={input.author}
                    name='author'
                    placeholder='Horacio'
                    id='author'
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className='divForm'>
                <div className='labelSpanForm'>
                    <label htmlFor='title'>Blog Title</label>
                    <span>{error.title}</span>
                </div>
                <input
                    type="text"
                    value={input.title}
                    name='title'
                    placeholder='Receta nueva'
                    id='title'
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className='divForm'>
                <div className='labelSpanForm'>
                    <label htmlFor='content'>Blog Content</label>
                    <span>{error.content}</span>
                </div>
                <textarea
                    type="text"
                    value={input.content}
                    name='content'
                    placeholder='Pan, huevo, pan , huevo'
                    id='content'
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <input
                type="submit"
                className='btnNav btnfrom'
                value={infoArticle.length > 0 ? 'Edit' : 'Save'}
            />
        </form>
        </>
    )
}

export default ArticlesFrom