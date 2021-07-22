import emojis from "../emojiList.json";
import Line from "./Line";
import { useState } from "react";

const Search = () => {
  const [keywords, setKeywords] = useState("");
  //   let foundEmojies = emojis;

  const handleSearch = (event) => {
    console.log("handle");
    setKeywords(event.target.value);
  };

  const regex = new RegExp(keywords, "gi");
  let foundEmojies = emojis.filter((emoji) => {
    return regex.test(emoji.keywords);
  });
  return (
    <div className="search">
      <h1>😎 Emoji Search 😎</h1>
      <input
        onChange={handleSearch}
        type="search"
        placeholder="What emoji are you looking for?"
      />
      {foundEmojies.map((emoji, index) => {
        return <Line key={index} title={emoji.title} symbol={emoji.symbol} />;
      })}
    </div>
  );
};
export default Search;
