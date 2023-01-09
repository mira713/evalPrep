import React from 'react'
import { useRouter } from 'next/router'
import styles from"./projects.module.css"

const Projects = ({blog}) => {
  let router = useRouter()
  let data = blog.items
    console.log(blog.items)
    let back=()=>{
     router.back()
    }
  return (
    <div>
      <h1>Projects</h1>
      <br/>
      <button onClick={back}>Go Back</button>
      <div className={styles.projects}>
      {data.map((el)=>{
        return <div style={{ marginTop:"50px" ,padding : "10px",lineHeight:"25px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" ,backgroundColor:" rgb(51, 49, 49)"}} key={el.id}>
          <h3><u>{el.name}</u></h3>
          <br/>
          <h5>language : {el.language}</h5>
          <p>star gage : {el.stargazers_count}</p>
          <p>forks : {el.forks}</p>
           <hr/>
        </div>
      })}
      </div>
    </div>
  )
}
export async function getStaticProps(){
  let username="mira713"
  let res= await fetch(`https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`);
  let data = await res.json();
  //console.log(data);
  return {
    props : {
       blog : data
    }
  }
}
export default Projects

