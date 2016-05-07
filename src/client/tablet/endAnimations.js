import Velocity from 'velocity-animate';
import m from 'mithril';

 export const fadeIn = () => {
    const element = document.querySelector(".endKiosk");
    element.style.opacity = 0;
    Velocity.animate(
    element,
    {
      opacity: '1',
    },
    { duration: 500 });
    //Velocity(element, {opacity:1});
};

 export const fadeOut = (route) => {
    const element = document.querySelector(".endKiosk");
    Velocity.animate(
    element,
    {
      opacity: '0',
    },
    { duration: 500 }
	).then(function(){console.log("resolved");
    	location.search = "/tablet/"+route+"/"+m.route.param("usercode")+"";

	});
    //Velocity(element, {opacity:1});
};

export const fadeOutNewRoute = (route) =>{
	const element = document.querySelector(".endKiosk");
    Velocity.animate(
    element,
    {
      opacity: '0',
    },
    { duration: 500 }
	).then(function(){console.log("resolved");
    	location.search = route;

	});
}

export const slideOut = (route) => {
	console.log("slides");
    const element = document.querySelector(".endKiosk");
    Velocity.animate(
    element,
    {
      translateX: "-1000px",
    },
    { duration: 500 }
	).then(function(){console.log("resolved");
    	location.search = "/tablet/"+route+"/"+m.route.param("usercode")+"";

	});
    //Velocity(element, {opacity:1});
};

export const slideIn = (route) => {
	console.log("slidesin");
    const element = document.querySelector(".endKiosk");
    Velocity.animate(
    element,
    {
      translateX: "1000px",
    },
    { duration: 500 }
	).then(function(){console.log("resolved");
    	location.search = "/tablet/"+route+"/"+m.route.param("usercode")+"";

	});
    //Velocity(element, {opacity:1});
};


export const removeCard = (selected) =>{
	const element = document.querySelector(selected);
	const allCards = document.querySelector(".cards");
	 Velocity.animate(
    element,
    {
      translateY: "1000px",
    },
    { duration: 1000 }
	).then(function(){console.log("resolved");
    	Velocity.animate(allCards,{translateX:"-300px",}).then(function(){
    		location.reload();
    	});


	});

}

export default {
  fadeIn,
  fadeOut,
  slideOut,
  slideIn,
  removeCard,
  fadeOutNewRoute

};

