import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import o from "./assets/o.svg";
import x from "./assets/x.svg";
import black from "./assets/black.svg";

type caseIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
1;
function App() {
  const [case1, setCase1] = useState<number>(0);
  const [case2, setCase2] = useState<number>(0);
  const [case3, setCase3] = useState<number>(0);

  const [case4, setCase4] = useState<number>(0);
  const [case5, setCase5] = useState<number>(0);
  const [case6, setCase6] = useState<number>(0);

  const [case7, setCase7] = useState<number>(0);
  const [case8, setCase8] = useState<number>(0);
  const [case9, setCase9] = useState<number>(0);

  const [add, setAdd] = useState<number>(1);

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const array: [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ] = [
    [case1, case2, case3],
    [case4, case5, case6],
    [case7, case8, case9],
  ];

  const player = () => {
    setAdd(add == 1 ? 5 : 1);
  };

  useEffect(() => {
    for (let i = 0; i < array.length; i++) {
      const xline = array[i][0] + array[i][1] + array[i][2];
      const yline = array[0][i] + array[1][i] + array[2][i];
      const line1 = array[0][0] + array[1][1] + array[2][2];
      const line2 = array[2][0] + array[1][1] + array[0][2];
      const allCase =
        array[0][0] +
        array[0][1] +
        array[0][2] +
        array[1][0] +
        array[1][1] +
        array[1][2] +
        array[2][0] +
        array[2][1] +
        array[2][2];
      if (xline == 3 || yline == 3 || line1 == 3 || line2 == 3) {
        refreshPage();
        alert("Player 1 won!");
        break;
      } else if (xline == 15 || yline == 15 || line1 == 15 || line2 == 15) {
        refreshPage();
        alert("Player 2 won!");
        break;
      } else if (allCase >= 25) {
        refreshPage();
        alert("Draw!");
        break;
      }
    }
  }, [array]);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="">
        <div>
          <button
            className="m-1 px-3 py-3"
            onClick={() => {
              if (case1 == 0) {
                setCase1(add);
                player();
              }
            }}
          >
            {case1 == 0 && (
              <img src={black} alt="empty" className="opacity-0" />
            )}
            {case1 == 1 && <img src={o} alt="o" />}
            {case1 == 5 && <img src={x} alt="x" />}
          </button>
          <button
            className="m-1 px-3 py-3"
            onClick={() => {
              if (case2 == 0) {
                setCase2(add);
                player();
              }
            }}
          >
            {case2 == 0 && (
              <img src={black} alt="empty" className="opacity-0" />
            )}
            {case2 == 1 && <img src={o} alt="o" />}
            {case2 == 5 && <img src={x} alt="x" />}
          </button>
          <button
            className="m-1 px-3 py-3"
            onClick={() => {
              if (case3 == 0) {
                setCase3(add);
                player();
              }
            }}
          >
            {case3 == 0 && (
              <img src={black} alt="empty" className="opacity-0" />
            )}
            {case3 == 1 && <img src={o} alt="o" />}
            {case3 == 5 && <img src={x} alt="x" />}
          </button>
        </div>
        <div>
          <button
            className="m-1 px-3 py-3"
            onClick={() => {
              if (case4 == 0) {
                setCase4(add);
                player();
              }
            }}
          >
            {case4 == 0 && (
              <img src={black} alt="empty" className="opacity-0" />
            )}
            {case4 == 1 && <img src={o} alt="o" />}
            {case4 == 5 && <img src={x} alt="x" />}
          </button>
          <button
            className="m-1 px-3 py-3"
            onClick={() => {
              if (case5 == 0) {
                setCase5(add);
                player();
              }
            }}
          >
            {case5 == 0 && (
              <img src={black} alt="empty" className="opacity-0" />
            )}
            {case5 == 1 && <img src={o} alt="o" />}
            {case5 == 5 && <img src={x} alt="x" />}
          </button>
          <button
            className="m-1 px-3 py-3"
            onClick={() => {
              if (case6 == 0) {
                setCase6(add);
                player();
              }
            }}
          >
            {case6 == 0 && (
              <img src={black} alt="empty" className="opacity-0" />
            )}
            {case6 == 1 && <img src={o} alt="o" />}
            {case6 == 5 && <img src={x} alt="x" />}
          </button>
        </div>
        <div>
          <button
            className="m-1 px-3 py-3"
            onClick={() => {
              if (case7 == 0) {
                setCase7(add);
                player();
              }
            }}
          >
            {case7 == 0 && (
              <img src={black} alt="empty" className="opacity-0" />
            )}
            {case7 == 1 && <img src={o} alt="o" />}
            {case7 == 5 && <img src={x} alt="x" />}
          </button>
          <button
            className="m-1 px-3 py-3"
            onClick={() => {
              if (case8 == 0) {
                setCase8(add);
                player();
              }
            }}
          >
            {case8 == 0 && (
              <img src={black} alt="empty" className="opacity-0" />
            )}
            {case8 == 1 && <img src={o} alt="o" />}
            {case8 == 5 && <img src={x} alt="x" />}
          </button>
          <button
            className="m-1 px-3 py-3"
            onClick={() => {
              if (case9 == 0) {
                setCase9(add);
                player();
              }
            }}
          >
            {case9 == 0 && (
              <img src={black} alt="empty" className="opacity-0" />
            )}
            {case9 == 1 && <img src={o} alt="o" />}
            {case9 == 5 && <img src={x} alt="x" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
