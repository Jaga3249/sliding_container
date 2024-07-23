import { useState } from "react";

const App = () => {
  let arr1 = [1, 2];
  let arr2 = [3, 4, 5];
  let arr3 = [6, 7];
  const [lineOne, setLineOne] = useState(arr1);
  const [lineTwo, setLineTwo] = useState(arr2);
  const [lineThree, setLineThree] = useState(arr3);
  const [translateState, setTranslateState] = useState(false);
  const [translateState1, setTranslateState1] = useState(false);
  const [translateState2, setTranslateState2] = useState(false);

  const handleClick = (line, item) => {
    if (item === 4) {
      setTranslateState((prev) => !prev);
      // setTranslateState1((prev) => !prev);
      setTranslateState2((prev) => !prev);
    }
    if (line == 0) {
      setTranslateState((prev) => !prev);
    } else if (line === 1) {
      setTranslateState1((prev) => !prev);
    } else {
      setTranslateState2((prev) => !prev);
    }
    console.log(item);

    // setCount((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border-[1px]  w-[50vh] h-[30vh] flex flex-col justify-between cursor-pointer rounded-md shadow-md">
        <div className="flex justify-between px-2 my-2">
          {lineOne.map((item, i) => (
            <div
              className={`px-4 py-2 rounded-md ${
                i === 0 ? "bg-red-600" : "bg-blue-600"
              } 
              ${
                translateState
                  ? i == 0
                    ? "translate-x-64 transition-transform duration-1000 ease-in-out"
                    : "-translate-x-64  transition-transform duration-1000 ease-in-out"
                  : i == 0
                  ? "-translate-x-0  transition-transform duration-1000 ease-in-out"
                  : "translate-x-0 transition-transform duration-1000 ease-in-out"
              }  text-white font-bold
               `}
              key={i}
              onClick={() => handleClick(0, item)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex justify-between px-2 my-2">
          {lineTwo.map((item, i) => (
            <div
              className={`px-4 py-2 rounded-md ${
                i === 0
                  ? "bg-gray-700"
                  : i == 1
                  ? "bg-orange-600"
                  : "bg-amber-400"
              } 
              ${
                translateState1
                  ? i == 0
                    ? "translate-x-64 transition-transform duration-1000 ease-in-out"
                    : i == 2
                    ? "-translate-x-64  transition-transform duration-1000 ease-in-out"
                    : ""
                  : i == 0
                  ? "-translate-x-0  transition-transform duration-1000 ease-in-out"
                  : i == 2
                  ? "translate-x-0 transition-transform duration-1000 ease-in-out"
                  : ""
              }
              text-white font-bold 
               `}
              key={i}
              onClick={() => handleClick(1, item)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex justify-between px-2 my-2">
          {lineThree.map((item, i) => (
            <div
              className={`px-4 py-2 rounded-md ${
                i === 0 ? "bg-yellow-600" : "bg-green-600"
              } 
              ${
                translateState2
                  ? i == 0
                    ? "translate-x-64 transition-transform duration-1000 ease-in-out"
                    : "-translate-x-64  transition-transform duration-1000 ease-in-out"
                  : i == 0
                  ? "-translate-x-0  transition-transform duration-1000 ease-in-out"
                  : "translate-x-0 transition-transform duration-1000 ease-in-out"
              } 
               text-white font-bold`}
              key={i}
              onClick={() => handleClick(2, item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
