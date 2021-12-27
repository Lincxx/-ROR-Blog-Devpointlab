import React from "react"

// A react component is just a JS function

const Pages = (props) => {
    const pages = props.pages

    const renderPages = () => {
        // pages = [{title:'sdf', author:'tim', body:'dfs'}]
        return pages.map( (page) => {
            return (
                <div>
                    <h1>{ page.title }</h1>
                    <p>{ page.author }</p>
                    <p>{ page.id }</p>
                    <p>{ page.body }</p>
                    <a href={`pages/${page.id}`}>show page</a>
                    <a href={`pages/${page.id}/edit`}>edit page</a>
                    <a href={`pages/${page.id}`} data-method="delete">delete page</a>
                </div>
            )
        })
    }

    return(
        <div>
            <h1>Blog</h1>
            <a href="/pages/new">create a new page</a>
            { renderPages() }
        </div>
    )
}

export default Pages;