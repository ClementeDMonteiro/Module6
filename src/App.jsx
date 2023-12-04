import { useState } from "react";
import "./App.css";

import Greeting from "./components/Greeting";
import Cats from "./components/BigCatsgCats";
import SingleCat from "./components/SingleCatngleCat";
import MoviesList from "./components/MovieList";
import MoodChanger from "./components/MoodChanger";
import EmojiChanger from "./components/Emojimoji";
import SingleCat from "./Components/SingleCat";
import Cats from "./Components/BigCats";
import BigCats5 from "./Components/BigCats5";

// This creates a new component as a function that returns some JSX.
// Add this in App.jsx ABOVE the App component

function Welcome(props) {
  // custom Welcome component
  return (
    <div className="Welcome componentBox ">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3>Welcome {props.name}!</h3>
      {/* if this component has children, render them here */}
      {props.children}
    </div>
  );
}

function App() {
  // part of complexcomponent exercise:
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>

      // Exercise 5
      <BigCats5/>
      // Exercise 4
      <Cats/>
      <SingleCat/>
      // Exercise 3
      <EmojiChanger />
      <SingleCat />
      // Exercise 2
      <Cats />
      // Exercise 1
      <Greeting name="JD">
        {" "}
        <h2>This is the children from Greeting</h2>
      </Greeting>
      //JUST CLASS exercises from here ⬇️
      <MoodChanger />
      <MoviesList />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <FullName first="Kendrick" last="Lamar" />
      <City name="Sidney" />
      <Welcome name="students">
        <p>Children of Welcome numero 1 </p>
      </Welcome>
      <Welcome name="family">
        <p>Children of Welcome numero 2</p>
      </Welcome>
      <Welcome name="friends">
        <h1>thi is the last component</h1>
        <p style={{ color: "green" }}>Children of last component</p>
      </Welcome>
    </>
  );
}

export default App;