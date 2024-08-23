import { useEffect, useState } from "react";
import { Form, useLoaderData, useParams, json } from "react-router-dom";

export async function loader({ params }) {
  const { noteId } = params;
  const response = await fetch(`http://localhost:4000/v1/notes/${noteId}`);

  if (!response.ok) {
    throw new Response('Failed to fetch user data', { status: response.status });
  }

  const noteData = await response.json();
  return json(noteData);
}

export default function Notes() {
  const apiResponse = useLoaderData();




  return (
    <>
      <div>
        <h1>Note #{apiResponse.note.id}</h1>
        <p></p>
        <p>{apiResponse.note.content}</p>
        <p>Tags: {apiResponse.note.tags}</p>
        <p>Created at: {apiResponse.note.created_at}</p>
        <p>Last Updated at: {apiResponse.note.last_updated_at}</p>
      </div>
    </>
  );
}