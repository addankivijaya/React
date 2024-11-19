import StarRating from "./StarRating";

function App() {
  return (
    <div className="App">
      <StarRating
        maxRating="5"
        className="test"
        messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
      />
    </div>
  );
}

export default App;
