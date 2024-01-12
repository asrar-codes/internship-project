import { useState } from "react";
import deskSvg from "./assets/desk.svg";
import { data } from "./data";

function App() {
  const [reviewArr, setreviewArr] = useState(data);
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <>
      <section className="container">
        <header className="heading">
          <h2>From our students...</h2>
        </header>
        <main className="main">
          <div className="img-container">
            <img src={deskSvg} alt="desk" />
          </div>
          <section className="scroll-container">
            <div className="scroll-items">
              {reviewArr.map((review, reviewIndex) => {
                const { id, text, name } = review;
                return (
                  <article
                    key={id}
                    className="scroll"
                    style={{
                      transform: `translateX(${
                        50 * (reviewIndex - currentItem)
                      }%)`,
                      opacity: reviewIndex === currentItem ? 1 : 0,
                      visisbility:
                        reviewIndex === currentItem ? "visible" : "hidden",
                      zIndex: reviewIndex === currentItem ? 100 : -100,
                    }}
                  >
                    <p>{text}</p>
                    <h4>{name}</h4>
                  </article>
                );
              })}
            </div>

            <div className="button-container">
              {reviewArr.map((btn, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentItem((old) => index)}
                    className="button"
                    style={{
                      backgroundColor:
                        index === currentItem ? "#ffca5d" : "white",
                    }}
                  ></button>
                );
              })}
            </div>
          </section>
        </main>
        <section className="tep"></section>
      </section>
    </>
  );
}

export default App;
