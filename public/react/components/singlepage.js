
import React from "react";
import apiURL from "../api";
import { useState } from "react";
import { useEffect } from "react";

const singlepage = ({slug,backtolist}) => {
    const [page,setPage] = useState()


useEffect(() => {
    const fetchpage = async () => {
        const response = await fetch(`${apiURL}/wiki/${slug}`)
        const pagedata = await response.json()
        setPage(pagedata)
   }

    fetchpage() },
    [slug])

    const { title, author, content, tags, createdAt } = page;

    return (
      <div>
        <button onClick={backtolist}>Back to Wiki List</button>
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <p>{content}</p>
        <p>Tags: {tags}</p>
        <p>Date: {createdAt}</p>
      </div>
    );

}

export default singlepage 