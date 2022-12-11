// window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//       const element = document.getElementById(selector)
//       if (element) element.innerText = text
//     }

//     for (const dependency of ['chrome', 'node', 'electron']) {
//       replaceText(`${dependency}-version`, process.versions[dependency])
//     }
//   })

const qData = [
    "HAVE YOU FELT THIS WAY LONG?",
    "DO YOU THINK THIS IS REASONABLE IN LIGHT OF YOUR INTERESTS?",
    "DO YOUR FRIENDS FIND THIS ACCEPTABLE?",
    "DO YOU FEEL COMFORTABLE WITH THIS FEELING?",
    "DO YOU THINK THAT THIS IS A NORMAL FEELING?",
    "WHY DO YOU THINK YOU FEEL THIS WAY?",
    "HAVE YOU TALKED TO ANYONE ABOUT THIS?",
    "HAVE YOU TALKED TO ANYONE ABOUT THIS?",
    "WHY ARE YOU HERE?",
    "ARE YOU SATISFIED WITH THE WAY YOUR IDEAS ARE DEVELOPING?",
  ];
  const startQ = [
    "WHAT DID YOU SAY YOUR NAME WAS AGAIN?",
    "HOW DO YOU FEEL TODAY?",
  ];
  const input = document.querySelector(".screen__input");
  const tmp = document.querySelector(".tmp").content;
  const screen = document.querySelector(".screen");
  const tmpLast = document.querySelector('.tmp-last').content;
  let c = 0;
  let userName  = '';
  // input.addEventListener('keydown',listerForInt)
  
  // function listerForInt(evt){
  //     if(evt.key === "Enter"){
  //         setListeners();
  //     }
  // }
  
  function generateTemolate(template, quation) {
    const tmp = template.querySelector(".template").cloneNode(true);
    tmp.querySelector(".template__quation").textContent = quation;
    return tmp;
  }
  
  
  function returnRundom() {
    return Math.floor(Math.random() * 10);
  }
  let count = 0;
  let inputName;
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter" && c <= 9) {
      count++;
      if (count === 1) {
          const template = generateTemolate(tmp, startQ[count - 1]);
          evt.target.focus();
          screen.append(template);
          inputName = template.querySelector('.template__input');
          evt.target.setAttribute("readonly", true);
      }
      if (count === 2) {
        const template = generateTemolate(tmp, startQ[count - 1]);
        const input  = template.querySelector('.template__input');
        evt.target.focus();
        screen.append(template);
        evt.target.setAttribute("readonly", true);
  
      } 
      if(count > 2 && c<8) {
        evt.target.focus();
        const number = returnRundom();
        const template = generateTemolate(tmp, qData[number]);
        template.querySelector('.screen__main_massege').classList.add('main__marg')
        screen.append(template);
        evt.target.setAttribute("readonly", true);
        c++;
      }
      if(count == 11 ){
        evt.target.focus();
        const template = generateTemolate(tmp,`I THINK YOU ARE MAKING A GREAT ATTEMPT TO SOLVE YOUR\n
        
        DIFFICULTIES, AND I SEE NO NEED TO CONTINUE THIS\n
        SESSION ANY FURTHER.\n
        ${inputName.value} WOULD YOU MAKE ANOTHER APPOINTMENT WITH MY COMPUTER\n
        FOR SOMETIME IN THE NEXT FEW WEEKS. WHAT DATE WOULD YOU"\n
        PREFER?`)
        const input  = template.querySelector('.template__input');
        template.scrollIntoView();
        screen.append(template);
        evt.target.setAttribute("readonly", true);
        evt.target.blur();
      }
      if(count == 12){
        evt.target.focus();
        const template = generateTemolate(tmpLast,`THAT WILL BE FINE .
        I'VE ENJOYED COMMUNICATING WITH YOU.
        HAVE A NICE DAY.`)
        template.querySelector('.screen__main_massege').classList.add('end')
        template.scrollIntoView();
        screen.append(template);
        window.scrollTo(0, 800);
        evt.target.focus();
      }
    }
  });
  /* <div class="tmp">
    <p class="quation"></p>
    <input class = 'answer' type="text">
  </div>  */
  