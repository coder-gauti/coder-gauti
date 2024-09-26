import './App.scss';
import Routing from './routing/routing';

function App() {

  window.addEventListener("mousemove", function (e) {
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");

    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;


    cursor2.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: "forwards" });


  });

  return (
    <div className='main-app'>
      <Routing />
      <div className='cursor'></div>
      <div className='cursor2'></div>
    </div>
  );
}

export default App;
