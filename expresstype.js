let short_array=["Dream big. Start small. Act now.",
  "Stay positive. Work hard. Make it happen.",
  "Do it with passion or not at all.",
  "Progress, not perfection, is the goal.",
  "Less talk. More action. Greater results.",
  "Be the change you want to see.",
  "Every moment is a fresh beginning.",
  "Kindness is free. Sprinkle it everywhere.",
  "Create your own sunshine every single day.",
  "Doubt kills more dreams than failure ever will."
];

let medium_array= [
  "Success doesnt come overnight. Its built daily through discipline, persistence, belief, and showing up even when its difficult.",
  "You are capable of amazing things when you focus your energy, believe in yourself, and refuse to give up easily.",
  "Dont wait for the perfect moment. Take the moment and make it perfect with your attitude, effort, and intention.",
  "Your future is created by what you do today, not tomorrow. Make today count with purpose, drive, and clear focus.",
  "Happiness isnt found in things. Its found in gratitude, love, connection, and learning to be present in each moment.",
  "Fear is temporary. Regret is forever. Take chances, follow your heart, and live fully with courage and confidence.",
  "Growth begins when you step outside your comfort zone and embrace discomfort as a path to something greater and meaningful.",
  "Life rewards those who keep going, even when the path is unclear, the motivation is low, and results are slow.",
  "Discipline is choosing between what you want now and what you want most. Long-term success comes through consistent, intentional effort.",
  "Greatness isnt luck. Its a habit, built daily through commitment, failure, persistence, reflection, and the courage to keep improving."
];

let long_array=[
  "Success is not measured by how high you climb, but by how many times you bounce back after hitting the bottom. Every failure teaches you something valuable, every setback builds your resilience, and every challenge is an opportunity to grow stronger and wiser. The journey is just as important as the destination, so embrace each moment with courage and determination.",
  
  "Life has a way of testing us when we least expect it, pushing us to our limits and beyond. Its in these moments of struggle that our true character is revealed, and its how we respond to adversity that shapes our future. Remember that storms dont last forever — they clear the sky for new beginnings and brighter horizons.",
  
  "The biggest barrier to success is often the fear of failure. We hesitate, we procrastinate, and sometimes we give up before we even try. But true growth happens outside the comfort zone, where uncertainty meets courage. Take that leap, trust your abilities, and know that even if you stumble, youll land stronger and more prepared.",
  
  "Happiness is not a destination or a prize to be won; it is a state of mind cultivated by gratitude, kindness, and purpose. Its found in the small moments — a smile, a helping hand, a deep breath on a difficult day. When you focus less on what you lack and more on what you have, life becomes richer and more meaningful.",
  
  "Our minds are powerful tools capable of shaping our reality. Negative thoughts can imprison us, but positive thinking and self-belief can set us free. Change your mindset, and you change your world. It takes daily practice, patience, and persistence, but the transformation is worth every effort.",
  
  "True leadership is not about commanding from the top, but about lifting others up and inspiring them to be their best selves. It requires empathy, humility, and vision. When leaders serve rather than dominate, they create communities built on trust, respect, and shared purpose.",
  
  "Creativity doesnt come from waiting for the perfect moment or inspiration to strike. It comes from the discipline of showing up, experimenting, making mistakes, and trying again. The act of creating is a journey of discovery where failure is simply a stepping stone toward mastery.",
  
  "Time is the most valuable resource we have, yet it slips through our fingers like sand. How we choose to spend it defines the quality of our lives. Prioritize what truly matters, be present in the moment, and invest in experiences and relationships that nourish your soul.",
  
  "Every person you meet is fighting a battle you know nothing about. Kindness and compassion are the simplest yet most powerful gifts you can offer. They create ripples that spread far beyond your immediate circle, changing lives in ways you may never see.",
  
  "The path to greatness is rarely straight or smooth. Its filled with twists, turns, setbacks, and surprises. Embrace the uncertainty and trust the process. Keep moving forward, learning, adapting, and growing — because the journey itself is the true reward."
];


let sht=document.getElementById("btn-short");
let med=document.getElementById("btn-medium");
let lng=document.getElementById("btn-long");
 
let divisorNumber=8;
let selectedArray=short_array;
document.addEventListener("DOMContentLoaded",()=>{
  sht.classList.add("green");
  selectedArray=short_array;
})

sht.addEventListener("click",()=>{
  sht.classList.add("green");
  med.classList.remove("green");
  lng.classList.remove("green");
  selectedArray=short_array;
  divisorNumber=4.5;
})
med.addEventListener("click",()=>{
  sht.classList.remove("green");
  med.classList.add("green");
  lng.classList.remove("green");
  selectedArray=medium_array;
  divisorNumber=2;
})
lng.addEventListener("click",()=>{
  sht.classList.remove("green");
  med.classList.remove("green");
  lng.classList.add("green");
  selectedArray=long_array;
  divisorNumber=1;
})



let randQuote=function(arr){
  let randomindex=Math.floor(Math.random()*10);
  return arr[randomindex];
}

let text=document.getElementById("text");
let quote=randQuote(selectedArray);
text.innerHTML=quote;

let typingSection=document.getElementById("writing");

let nextbutton=document.getElementById("next");
nextbutton.addEventListener("click",()=>{
  let randQuote=function(arr){
    let randomindex=Math.floor(Math.random()*10);
    return arr[randomindex];
  }
  
  let text=document.getElementById("text");
  let quote=randQuote(selectedArray);
  text.innerHTML=quote;
  typingSection.innerHTML=`<span class="cursor"></span>`;
})


let st=null;
let originaltext=document.getElementById("text").textContent
document.addEventListener('keydown', function(event) {
      // Handle backspace manually
      if (event.key === 'Backspace') {
        typingSection.textContent = typingSection.textContent.slice(0, -1);
      }
      // Handle normal characters
      else if (event.key.length === 1) {
        if(!st){
          st=new Date();
        }
        typingSection.textContent += event.key;
        
      }
      // Handle Enter key as a new line
      else if (event.key === 'Enter') { 

        let end=new Date();
        let timeInSeconds = (end - st) / 1000;

        let length=originaltext.length/divisorNumber;
        let typedSpeed = (length / timeInSeconds) * 60;
        if(typedSpeed>500){typedSpeed=0;}

        let speed=document.getElementById("speed");
        speed.textContent=`Last WPM: ${typedSpeed.toFixed(0)}`;
        st=null;

        typingSection.innerHTML=`<span class="cursor"></span>`;
        
        let randQuote=function(arr){
        let randomindex=Math.floor(Math.random()*10);
        return arr[randomindex];
  }

        let text=document.getElementById("text");
        let quote=randQuote(selectedArray);
        text.innerHTML=quote;

        
      }
    });


    let profileicon=document.getElementById("profileicon");
    let container=document.getElementById("container");
    
    profileicon.addEventListener("click",()=>{
      container.classList.add("maincontainer");
      profilebox.classList.remove("scale-0");
      
    })

    let profilebox_head2=document.getElementsByClassName("profilebox-head2")[0];
    profilebox_head2.addEventListener("click",()=>{
      container.classList.remove("maincontainer");
      profilebox.classList.add("scale-0");

    })


    let settingsicon=document.getElementById("settingsicon");
    settingsicon.addEventListener("click",()=>{
      container.classList.add("maincontainer");
      setting.classList.remove("scale-0");
    })

    let settings_head2=document.getElementsByClassName("settings-head2")[0];
    settings_head2.addEventListener("click",()=>{
      container.classList.remove("maincontainer");
      setting.classList.add("scale-0");
    })

