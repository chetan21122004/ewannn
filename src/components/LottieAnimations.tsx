import Lottie from "lottie-react";

// Globe spinning animation data
const globeAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 200,
  h: 200,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Globe",
      sr: 1,
      ks: {
        o: { a: 0, k: 80 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [360] }, { t: 90, s: [360] }] },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [120, 120] },
          d: 1,
          nm: "Circle"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.816, 0.686, 0.216, 1] },
          o: { a: 0, k: 60 },
          w: { a: 0, k: 2 },
          lc: 1,
          lj: 1,
          nm: "Stroke"
        },
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [120, 60] },
          d: 1,
          nm: "Ellipse"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.816, 0.686, 0.216, 1] },
          o: { a: 0, k: 40 },
          w: { a: 0, k: 1.5 },
          lc: 1,
          lj: 1,
          nm: "Stroke2"
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Meridian",
      sr: 1,
      ks: {
        o: { a: 0, k: 50 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [-360] }, { t: 90, s: [-360] }] },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [60, 120] },
          d: 1,
          nm: "Meridian"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.816, 0.686, 0.216, 1] },
          o: { a: 0, k: 30 },
          w: { a: 0, k: 1 },
          lc: 1,
          lj: 1,
          nm: "Stroke"
        }
      ]
    }
  ]
};

// Pulse ring animation
const pulseRingData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Ring1",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [80], e: [0] }, { t: 60, s: [0] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [40, 40, 100], e: [150, 150, 100] }, { t: 60, s: [150, 150, 100] }] }
      },
      shapes: [
        { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, d: 1 },
        { ty: "st", c: { a: 0, k: [0.816, 0.686, 0.216, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 }, lc: 1, lj: 1 }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Ring2",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 15, s: [80], e: [0] }, { t: 60, s: [0] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 15, s: [40, 40, 100], e: [150, 150, 100] }, { t: 60, s: [150, 150, 100] }] }
      },
      shapes: [
        { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, d: 1 },
        { ty: "st", c: { a: 0, k: [0.816, 0.686, 0.216, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 }, lc: 1, lj: 1 }
      ]
    }
  ]
};

// Chat bubble animation
const chatBubbleData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 200,
  h: 200,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Bubble1",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [0], e: [100] }, { t: 15, s: [100], e: [100] }, { t: 75, s: [100], e: [0] }, { t: 90, s: [0] }] },
        p: { a: 1, k: [{ t: 0, s: [60, 140, 0], e: [60, 100, 0] }, { t: 30, s: [60, 100, 0] }] },
        s: { a: 1, k: [{ t: 0, s: [0, 0, 100], e: [100, 100, 100] }, { t: 15, s: [100, 100, 100] }] }
      },
      shapes: [
        { ty: "rc", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [70, 35] }, r: { a: 0, k: 10 }, d: 1 },
        { ty: "fl", c: { a: 0, k: [0.816, 0.686, 0.216, 1] }, o: { a: 0, k: 30 } }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Bubble2",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 20, s: [0], e: [100] }, { t: 35, s: [100], e: [100] }, { t: 75, s: [100], e: [0] }, { t: 90, s: [0] }] },
        p: { a: 1, k: [{ t: 20, s: [140, 130, 0], e: [140, 80, 0] }, { t: 50, s: [140, 80, 0] }] },
        s: { a: 1, k: [{ t: 20, s: [0, 0, 100], e: [100, 100, 100] }, { t: 35, s: [100, 100, 100] }] }
      },
      shapes: [
        { ty: "rc", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [80, 35] }, r: { a: 0, k: 10 }, d: 1 },
        { ty: "fl", c: { a: 0, k: [0.816, 0.686, 0.216, 1] }, o: { a: 0, k: 20 } }
      ]
    }
  ]
};

// Checkmark success animation
const checkmarkData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 40,
  w: 100,
  h: 100,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [50, 50, 0] },
        s: { a: 1, k: [{ t: 0, s: [0, 0, 100], e: [100, 100, 100] }, { t: 15, s: [100, 100, 100] }] }
      },
      shapes: [
        { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [70, 70] }, d: 1 },
        { ty: "st", c: { a: 0, k: [0.816, 0.686, 0.216, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 }, lc: 2, lj: 2 }
      ]
    }
  ]
};

// Document/translate animation  
const translateDocData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Doc1",
      sr: 1,
      ks: {
        o: { a: 0, k: 70 },
        p: { a: 1, k: [{ t: 0, s: [70, 100, 0], e: [85, 100, 0] }, { t: 60, s: [85, 100, 0], e: [70, 100, 0] }, { t: 120, s: [70, 100, 0] }] },
        r: { a: 1, k: [{ t: 0, s: [-5], e: [0] }, { t: 60, s: [0], e: [-5] }, { t: 120, s: [-5] }] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "rc", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [60, 80] }, r: { a: 0, k: 5 }, d: 1 },
        { ty: "fl", c: { a: 0, k: [0.816, 0.686, 0.216, 1] }, o: { a: 0, k: 25 } },
        { ty: "st", c: { a: 0, k: [0.816, 0.686, 0.216, 1] }, o: { a: 0, k: 50 }, w: { a: 0, k: 1.5 }, lc: 1, lj: 1 }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Doc2",
      sr: 1,
      ks: {
        o: { a: 0, k: 70 },
        p: { a: 1, k: [{ t: 0, s: [130, 100, 0], e: [115, 100, 0] }, { t: 60, s: [115, 100, 0], e: [130, 100, 0] }, { t: 120, s: [130, 100, 0] }] },
        r: { a: 1, k: [{ t: 0, s: [5], e: [0] }, { t: 60, s: [0], e: [5] }, { t: 120, s: [5] }] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        { ty: "rc", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [60, 80] }, r: { a: 0, k: 5 }, d: 1 },
        { ty: "fl", c: { a: 0, k: [0.816, 0.686, 0.216, 1] }, o: { a: 0, k: 15 } },
        { ty: "st", c: { a: 0, k: [0.816, 0.686, 0.216, 1] }, o: { a: 0, k: 50 }, w: { a: 0, k: 1.5 }, lc: 1, lj: 1 }
      ]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Arrow",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [0], e: [100] }, { t: 30, s: [100], e: [100] }, { t: 90, s: [100], e: [0] }, { t: 120, s: [0] }] },
        p: { a: 0, k: [100, 100, 0] },
        s: { a: 1, k: [{ t: 20, s: [0, 100, 100], e: [100, 100, 100] }, { t: 40, s: [100, 100, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: false,
                  v: [[-15, 0], [15, 0]],
                  i: [[0, 0], [0, 0]],
                  o: [[0, 0], [0, 0]]
                }
              }
            },
            { ty: "st", c: { a: 0, k: [0.816, 0.686, 0.216, 1] }, o: { a: 0, k: 80 }, w: { a: 0, k: 2 }, lc: 2, lj: 2 },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    }
  ]
};

export const GlobeAnimation = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <Lottie animationData={globeAnimationData} loop autoplay className={className} style={style} />
);

export const PulseRingAnimation = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <Lottie animationData={pulseRingData} loop autoplay className={className} style={style} />
);

export const ChatBubbleAnimation = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <Lottie animationData={chatBubbleData} loop autoplay className={className} style={style} />
);

export const CheckmarkAnimation = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <Lottie animationData={checkmarkData} loop autoplay className={className} style={style} />
);

export const TranslateDocAnimation = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <Lottie animationData={translateDocData} loop autoplay className={className} style={style} />
);
