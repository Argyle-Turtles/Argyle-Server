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

export default {
  fadeIn,
  fadeOut

};

