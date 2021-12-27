import React from "react"

const Page = (props) => {
    // const page = props.page
    // js trick destructing
    const { page } = props
    return(
        <div>
            <a href="/pages">Go Back</a>
            <h1>{ page.title }</h1>
            <p>{ page.author }</p>
            <p>{ page.body }</p>
        </div>
    )
}

export default Page