import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const App = () => {
  const app = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".square", { rotate: 360, duration: 5 });
      //gsap.to(".square2", { rotate: 360, duration: 5 });
      //gsap.to(".square3", { rotate: 360, duration: 5 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={app}>
      <div className="square">Hello World</div>
    </div>
  );
};
export default App;
