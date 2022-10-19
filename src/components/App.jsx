import React, { useState } from "react";

const info = [
  {
    id:1,
    kind:'Art',
    One: "http://html.phoenixcoded.net/bolby/angular/assets/images/works/1.svg",
  },
  {
    id:2,
    kind:'Creative',
    One: "http://html.phoenixcoded.net/bolby/angular/assets/images/works/2.svg",
  },
  {
    id:3,
    kind:'Branding',
    One: "http://html.phoenixcoded.net/bolby/angular/assets/images/works/3.svg",
  },
  {
    id:4,
    kind:'Creative',
    One: "http://html.phoenixcoded.net/bolby/angular/assets/images/works/4.svg",
  },
  {
    id:5,
    kind:'Art',
    One: "http://html.phoenixcoded.net/bolby/angular/assets/images/works/5.svg",
  },
  {
    id:6,
    kind:'Design',
    One: "http://html.phoenixcoded.net/bolby/angular/assets/images/works/6.svg",
  },
];
const App = () => {
  const [state, setState] = useState(info);

    const HandleBtn = (e) =>{
    let word = e.target.value;

        if(word === 'Everything'){
            setState(info)
        }
        else if(word === 'Creative'){
            const filtered = info.filter(item=>item.kind === 'Creative')
            setState(filtered);
        }
        else if(word === 'Art'){
            const filtered = info.filter(item=>item.kind === 'Art')
            setState(filtered);
        }
        else if(word === 'Design'){
            const filtered = info.filter(item=>item.kind === 'Design')
            setState(filtered);
        }
        else if(word === 'Branding'){
            const filtered = info.filter(item=>item.kind === 'Branding')
            setState(filtered);
        }
    }





  return (
    <div className="container">
      <h1 className="mt-5">Recent works</h1>

      <div className="menu mt-5">
        <button value="Everything"  onClick={HandleBtn}>Everything</button>
        <button value="Creative"  onClick={HandleBtn}>Creative</button>
        <button value="Art"  onClick={HandleBtn}>Art</button>
        <button value="Design"  onClick={HandleBtn}>Design</button>
        <button value="Branding"  onClick={HandleBtn}>Branding</button>
      </div>

      <div className="row mt-4">
        {state.map((item) => (
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-5 cards " key={item.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.One} className="ss" alt="..." />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
