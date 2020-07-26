import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 

const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };
  const handleDateChange = (e, type, value) => {
    handleChange(e, "release_date", e.target.value);
  };


  return (
    <div className="row bg-warning">
      <div className="col-md-5">
        <h4>
          <span>List Filtering:</span>
          <input
            type="text"
            placeholder="Title Search"
            onChange={handleTextChange}
          />
        </h4>
      </div>
      <div classname="col-md-3">
        <h4>
          <span>Genre:</span>
          <select id="genre" onChange={handleGenreChange}>
            {context.genres.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </h4>
      </div>
      <div classname="col-md-4">
        <h4>
          <span>Release Date:</span>
          <input
            type="text"
            placeholder="Release Date"
            onChange={handleDateChange}
          />
        </h4>
      </div>
    </div>
  );
};

export default FilterControls;