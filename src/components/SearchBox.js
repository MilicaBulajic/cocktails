import React from "react";

const SearchBox = () => {
  return (
    <section>
      <form>
        <div>
          <label htmlFor="name">search cocktails</label>
          <input
            type="text"
            name="name"
            id="name"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBox;
