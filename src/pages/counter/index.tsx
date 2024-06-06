import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  incermentByAmount,
  increment,
} from "../../redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 gap-x-5">
        <button
          onClick={() => dispatch(increment())}
          className="p-5 w-full -h20 bg-green-500 text-white"
        >
          increment
        </button>
        <h3 className="text-black justify-self-center">Counter : {count}</h3>
        <button
          onClick={() => dispatch(decrement())}
          className="p-5 w-full -h20 bg-red-500 text-white"
        >
          Decrement
        </button>
      </div>
      <div className="my-5">
        <button
          onClick={() => dispatch(incermentByAmount(count))}
          className="p-5 w-full -h20 bg-orange-500 text-white"
        >
          Inrement By Amount
        </button>
      </div>
    </main>
  );
};

export default Counter;
