import Createuser from "../features/user/Createuser";
function Home() {
  return (
    <div className="my-10 text-center">
      <h1 className="text-xl font-semibold mb-4">
        The best pizza.
        <span className="text-yellow-500">
          <br />
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <Createuser />
    </div>
  );
}

export default Home;
