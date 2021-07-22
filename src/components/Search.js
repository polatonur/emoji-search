import emojis from "../emojiList.json";
import Line from "./Line";
import { useState } from "react";

const Search = () => {
  const [keywords, setKeywords] = useState("");
  let foundEmojis = [];
  const handleSearch = (event) => {
    console.log("handle");
    setKeywords(event.target.value);
    const regex = new RegExp(keywords, "ig");
    foundEmojis = emojis.filter((emoji) => {
      console.log(regex.test(emoji.keywords));
      return regex.test(emoji.keywords);
    });
  };
  console.log(foundEmojis);
  return (
    <div>
      <h1>😎 EmojiSearch 😎</h1>
      <input
        onChange={handleSearch}
        type="search"
        placeholder="What emoji are you looking for?"
      />
      {foundEmojis.map((emoji, index) => {
        return <Line key={index} title={emoji.title} symbol={emoji.symbol} />;
      })}
    </div>
  );
};
export default Search;
