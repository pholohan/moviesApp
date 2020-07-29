import React, { useEffect, useState } from "react";
import { getMoviePerson } from "../../api/tmdb-api";

export default ({ credit }) => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    getMoviePerson(credit.id).then(person => {
      setPerson(person);
    });
  }, []);
  return (
    <>
      <p><img src={person.profile_path
                              ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                              : "./film-poster-placeholder.png"} width="250" height="250" ></img></p>
      <p>Name: {person.name} </p>
      <p>Birthday: {person.birthday} </p>
      <p>Place of Birth: {person.place_of_birth} </p>
      <p>Biography: {person.biography} </p>
    </>
  );
};