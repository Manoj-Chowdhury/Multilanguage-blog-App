import React from 'react'

const English = () => {
    return (
        <div className='language'>
            <h1>What is React.js? (Uses, Examples, & More)</h1>
            <p>Today, front-end frameworks and libraries are becoming an essential part of the modern web development stack. React.js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community.</p>
            <p>For those who are new to web development, or trying to figure out what all the fuss is about, let’s look at React, how it works, and what makes it different from other JavaScript frameworks.</p>
            <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1625576291410/by9FKZ3ek.png" alt="react imaage" style={{height:'300px', width:"400px"}} />
            <h2 style={{display:'flex', justifyContent:'flex-start', padding:'0 100px'}}>What is React.js?</h2>
            <p>The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>

               <p> In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the application’s entire user interface.</p>

               <p> React’s primary role in an application is to handle the view layer of that application just like the V in a model-view-controller (MVC) pattern by providing the best and most efficient rendering execution. Rather than dealing with the whole user interface as a single unit, React.js encourages developers to separate these complex UIs into individual reusable components that form the building blocks of the whole UI. In doing so, the ReactJS framework combines the speed and efficiency of JavaScript with a more efficient method of manipulating the DOM to render web pages faster and create highly dynamic and responsive web applications.</p>
        </div>
    )
}

export default English