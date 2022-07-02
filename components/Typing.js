import React from "react";
import Typed from "typed.js";
const words = ["Memes", "Jokes", "Tweets"];
class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <div className=" bg-slate-800 z-10 px-32 py-32">
          <div className="text-4xl text-white bg-slate-800 font-semibold ">
            <span
              style={{ whiteSpace: "pre" }}
              ref={(el) => {
                this.el = el;
              }}
            />
          </div>
          <div className="text-2xl text-white bg-slate-800 font-bold">
            Find everything you need
          </div>
        </div>
      </>
    );
  }
}
export default Typing;
