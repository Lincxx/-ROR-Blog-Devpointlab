import React from "react"

const PageEdit = (props) => {
    const { page } = props
    return(
        <div>
            <h1>Edit page</h1>
            <form action={`/pages/${page.id}`} method="post">
                <input type="hidden" name="_method" value="patch"/>  
                <p>title</p>
                <input name="page[title]" defaultValue={`${page.title}`}/>
                <p>author</p>
                <input name="page[author]" defaultValue={`${page.author}`}/>
                <p>body</p>
                <textarea name="page[body]" defaultValue={`${page.body}`}/>

                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default PageEdit