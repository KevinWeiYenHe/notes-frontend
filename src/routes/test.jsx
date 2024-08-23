import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";


export async function loader({ params }) {
    const notes = await fetch(`http://localhost:4000/v1/notes/${params.noteId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })


    return { notes }
}


export default function Test() {

    const { note } = useLoaderData();
    return (
      <>
      {console.log(note)}
      </>
    );
  }