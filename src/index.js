import React from "react"
import ReactDom from "react-dom/client";
import './index.css'
 
const firstBook={
    author:'Iriboneye Nina',
    title:'Interesting Facts For Curious Minds',
    img:'./images/book1.jpg',
}
const secondBook={
    author: 'Berwa jannet',
    title: 'love story',
    img: './images/book2.jpg',
}
const thirdBook ={
    author:'Mugwanashaka christella',
    title:'fantastic book',
    img:'./images/book3.jpg',
}


function BookList (){
    return<section className="booklist">
         <Book  author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
         <Book  author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
        <Book   author={thirdBook.author} title={thirdBook.title} img={thirdBook.img}/> 
         </section>
 }





//  const img = "./images/book1.jpg"
//  const title = "Interesting Facts For Curious Minds"
//  const author = "john Doe"

// const Book =() =>{
//     return <article className="book">
//         <Image/>
//         <Title/>
//         <Arthor/>
//     </article>
// }
const Book = (props) => {
    const {author,title,img} = props
 
    return(
    <article className = "book">
        <img src={img} alt ={title}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
    </article>
    )
}
   /* const Image = () =>{
    <img
      src="./image/amzonp1.jpg"
      alt='Interesting Facts For Curious Minds'
    />
   };
 const Image= () => <h2>Image One</h2>
const Title =() => <h2 style={{color:'#617D98',marginTop:'2.5rem'}}>Interesting Facts For Curious Minds</h2>
const Arthor =() =><h2>John Doe</h2> */
const root =ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList/>)







