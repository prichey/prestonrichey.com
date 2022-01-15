import bikeSelf from './bike-self.jpg';
import bikeSelfZoom from './bike-self-zoom.jpg';
import doorFlowers from './door-flowers.jpg';
import doorFlowersZoom from './door-flowers-zoom.jpg';
import canyonRiverview from './canyon-riverview.jpg';
import canyonRiverviewZoom from './canyon-riverview-zoom.jpg';
import canyonSunrise from './canyon-sunrise.jpg';
import canyonSunriseZoom from './canyon-sunrise-zoom.jpg';
import leafy from './leafy.jpg';
import leafyZoom from './leafy-zoom.jpg';
import jamesLamp from './james-lamp.jpg';
import jamesLampZoom from './james-lamp-zoom.jpg';
import davidLamp from './david-lamp.jpg';
import davidLampZoom from './david-lamp-zoom.jpg';
import haCouple from './ha-couple.jpg';
import haCoupleZoom from './ha-couple-zoom.jpg';
import chanterelles from './chanterelles.jpg';
import chanterellesZoom from './chanterelles-zoom.jpg';
import candleSteps from './candle-steps.jpg';
import candleStepsZoom from './candle-steps-zoom.jpg';
import blueSun from './blue-sun.jpg';
import blueSunZoom from './blue-sun-zoom.jpg';
import hudson from './hudson.jpg';
import hudsonZoom from './hudson-zoom.jpg';
import bikeCamp from './bike-camp.jpg';
import bikeCampZoom from './bike-camp-zoom.jpg';
import frybread from './frybread.jpg';
import frybreadZoom from './frybread-zoom.jpg';
import hollywood from './hollywood.jpg';
import hollywoodZoom from './hollywood-zoom.jpg';
import texasSunset from './texas-sunset.jpg';
import texasSunsetZoom from './texas-sunset-zoom.jpg';
import roller from './roller.jpg';
import rollerZoom from './roller-zoom.jpg';
import hollyCam from './holly-cam.jpg';
import hollyCamZoom from './holly-cam-zoom.jpg';
import parentsSelfie from './parents-selfie.jpg';
import parentsSelfieZoom from './parents-selfie-zoom.jpg';

const proud = [
  { src: bikeSelf, zoomSrc: bikeSelfZoom },
  { src: doorFlowers, zoomSrc: doorFlowersZoom },
  { src: blueSun, zoomSrc: blueSunZoom, caption: 'FPO' }
];

const ny = [
  { src: hudson, zoomSrc: hudsonZoom, caption: 'The Hudson from the train' },
  { src: candleSteps, zoomSrc: candleStepsZoom }
];

const croton = [
  {
    src: bikeCamp,
    zoomSrc: bikeCampZoom,
    caption: 'Croton Point Park campsite'
  },
  {
    src: jamesLamp,
    zoomSrc: jamesLampZoom,
    caption: 'James'
  },
  {
    src: davidLamp,
    zoomSrc: davidLampZoom,
    caption: 'David with ramen'
  }
];

const la = [
  { src: hollywood, zoomSrc: hollywoodZoom },
  {
    src: hollyCam,
    zoomSrc: hollyCamZoom,
    caption: 'Holly at Santa Monica pier'
  }
];

// ny: lamp, hudson, candle, matt, manhattan-bridge, duck?, kusama
// croton: bike, james, david, fire
// tx: sunset
// los angeles: seagulls, ha couple, roller, holly-cam, hollywood
// arizona / colorado: canyon-riverview, canyon-sunrise, frybread, selfie, rocks, chanterelles,
// philly?
// san miguel?

const spring = [
  { src: hudson, zoomSrc: hudsonZoom, caption: 'The Hudson from the train' },
  { src: candleSteps, zoomSrc: candleStepsZoom },
  { src: texasSunset, zoomSrc: texasSunsetZoom }
];

const summer = [
  {
    src: bikeCamp,
    zoomSrc: bikeCampZoom,
    caption: 'Bike camping at Croton Point Park'
  },
  { src: jamesLamp, zoomSrc: jamesLampZoom },
  { src: davidLamp, zoomSrc: davidLampZoom },
  { src: canyonRiverview, zoomSrc: canyonRiverviewZoom },
  { src: canyonSunrise, zoomSrc: canyonSunriseZoom },
  { src: parentsSelfie, zoomSrc: parentsSelfieZoom },
  { src: hollywood, zoomSrc: hollywoodZoom },
  {
    src: hollyCam,
    zoomSrc: hollyCamZoom,
    caption: 'Holly at Santa Monica pier'
  }
];

const fall = [{ src: blueSun, zoomSrc: blueSunZoom, caption: 'FPO' }];

const winter = [{ src: blueSun, zoomSrc: blueSunZoom, caption: 'FPO' }];

export {
  proud,
  ny,
  croton,
  la,
  spring,
  summer,
  fall,
  winter,
  bikeSelf,
  bikeSelfZoom,
  doorFlowers,
  doorFlowersZoom,
  canyonRiverview,
  canyonRiverviewZoom,
  canyonSunrise,
  canyonSunriseZoom,
  leafy,
  leafyZoom,
  jamesLamp,
  jamesLampZoom,
  davidLamp,
  davidLampZoom,
  haCouple,
  haCoupleZoom,
  chanterelles,
  chanterellesZoom,
  candleSteps,
  candleStepsZoom,
  blueSun,
  blueSunZoom,
  hudson,
  hudsonZoom,
  bikeCamp,
  bikeCampZoom,
  frybread,
  frybreadZoom,
  hollywood,
  hollywoodZoom,
  texasSunset,
  texasSunsetZoom,
  roller,
  rollerZoom,
  hollyCam,
  hollyCamZoom,
  parentsSelfie,
  parentsSelfieZoom
};
