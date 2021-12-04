import React, { useState } from "react";

export default function SearchBox({ setSearchTerm }) {
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);


  const searchValue = React.useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const searchcocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="box">
      <form onSubmit={handleSubmit} className="search">
       <div className="form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Find your best cocktail recipe"
            onChange={searchcocktail}
            ref={searchValue}
          />

        </div>
      </form>
    </section>
  );
};
