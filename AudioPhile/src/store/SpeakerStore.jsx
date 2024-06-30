import { createContext, useState } from "react";


export const SpeakerContext = createContext({
  NewArrivalList: [],
  CategoriesList: [],
  HomeSpeaker1: [],
  HeadPhonesList: [],
  SpeakerList: [],
  EarphoneList: [],
  BoughtList: [],
  addToBoughtList: () => {},
  calculateTotalPrice: () => 0,
});

const DEFAULT_SPE_LIST = [
  {
    id : '201',
    img : 'https://images.unsplash.com/photo-1594991523303-a54f2722dc3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name : 'STINGER S3',
    description: 'Upgrade your sound system with the all new STINGER S3 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    price: '$ 3,000',
  },
  {
    id : '202',
    img : 'https://images.unsplash.com/photo-1687363251769-560d957b8847?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name : 'JBL PHANTOM',
    description: 'Upgrade your sound system with the all new JBL PHANTOM active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    price: '$ 3,000',
  },
  {
    id : '203',
    img : 'https://images.unsplash.com/photo-1693387593111-124ff0e01e23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name : 'OOAKER CR7',
    description: 'Upgrade your sound system with the all new OOAKER CR7 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    price: '$ 3,000',
  },
];

const DEFAULT_EAR_LIST = [
  {
    id : '301',
    img : 'https://images.unsplash.com/photo-1505236273191-1dce886b01e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name : 'AIRPODS PRO',
    description: 'Tailor your listening experience with bespoke dynamic drivers from the new AIRPODS PRO Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    price: '$ 3,000',
  },
  {
    id : '302',
    img : 'https://images.unsplash.com/photo-1677346414290-d337cbc682a6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name : 'YX1 WIRELESS',
    description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    price: '$ 3,000',
  },
];




const DEFAULT_POST_LIST = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1585298723682-7115561c51b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'NEW PRODUCT',
    subtitle: 'XX99 MARK II HEADPHONES',
    body: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    reactions: 2,
    userID: 'user-9',
    tags: ['headphones', 'audio', 'music']
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1633455711664-16bad5edb375?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'NEW PRODUCT',
    subtitle: 'ZX9 SPEAKER',
    body: 'Upgrade your sound system with the all new ZX9 speaker. It’s a great combination of innovation and design.',
    reactions: 20,
    userID: 'user-12',
    tags: ['speaker', 'audio', 'music']
  },
  {
    id: '3',
    img: 'https://images.unsplash.com/photo-1617350142147-7403b8fb9889?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'NEW PRODUCT',
    subtitle: 'NOTHING EARBUDS 2A',
    body: 'Upgrade your sound system with the all new ZX9 speaker. It’s a great combination of innovation and design.',
    reactions: 20,
    userID: 'user-12',
    tags: ['speaker', 'audio', 'music']
  }
];

const DEFAULT_CAT_LIST = [
  {
    id : '1',
    img: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'HEADPHONES',
    body: 'Check out our wide variety of high-quality headphones.',
    x:'Headphones',
  },
  {
    id : 2,
    img: 'https://images.unsplash.com/photo-1531104985437-603d6490e6d4?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'SPEAKERS',
    body: 'Discover powerful speakers designed for exceptional sound quality.',
    x:'Speakers',
  },
  {
    id:3,
    img: 'https://images.unsplash.com/photo-1590658006821-04f4008d5717?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'EARPHONES',
    body: 'Explore comfortable and stylish earphones for your daily use.',
    x:'Earphones',
  },
];

const DEFUALT_HOME_SPEAKER = [
  {
    id: '6',
    img: 'https://images.unsplash.com/photo-1595432541891-a461100d3054?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'BEST SPEAKER',
    subtitle: 'ZX9 SPEAKER',
    body: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound..',
    reactions: 2,
    userID: 'user-9',
    tags: ['headphones', 'audio', 'music']
  }
];

const DEFAULT_HEADPHONES_LIST = [
  {
    id:101,
    img:'https://images.unsplash.com/photo-1706290047883-64294c7e11c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'CR3ATIVE ZX10',
    description: 'The new CR3ATIVE ZX10 headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: '$ 3,000',
  },
  {
    id:102,
    img:'https://images.unsplash.com/photo-1636581252710-ce0e88023071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'MARSHALL MX10',
    description: 'The new CR3ATIVE ZX10 headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: '$ 3,000',
  },
  {
    id:103,
    img:'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'AIRPODS MAX10',
    description: 'The new CR3ATIVE ZX10 headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: '$ 3,000',
  },
  {
    id:104,
    img:'https://images.unsplash.com/photo-1616081118936-562f7c13d9ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'ZEPHYRUS XR11',
    description: 'The new CR3ATIVE ZX10 headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    price: '$ 3,000',
  }
]

const SpeakerProvider = ({ children }) => {
  const [NewArrivalList, setNewArrivalList] = useState(DEFAULT_POST_LIST);
  const [CategoriesList, setCategoriesList] = useState(DEFAULT_CAT_LIST);
  const [HomeSpeaker1, setHomeSpeaker1] = useState(DEFUALT_HOME_SPEAKER);
  const [HeadPhonesList, setHeadPhonesList] = useState(DEFAULT_HEADPHONES_LIST);
  const [SpeakerList, setSpeakerList] = useState(DEFAULT_SPE_LIST);
  const [EarphoneList, setEarphoneList] = useState(DEFAULT_EAR_LIST);
  const [BoughtList, setBoughtList] = useState([]);
  const addToBoughtList = (item) => {
    setBoughtList((prevList) => [...prevList, item]);
  };
  const calculateTotalPrice = () => {
    return BoughtList.reduce((total, item) => total + parseFloat(item.price.replace('$', '').replace(',', '')), 0);
  };
  
  return (
    <SpeakerContext.Provider value={{ NewArrivalList,  CategoriesList, HomeSpeaker1, HeadPhonesList, SpeakerList, EarphoneList, BoughtList, setBoughtList, addToBoughtList,  calculateTotalPrice,}}>
      {children}
    </SpeakerContext.Provider>
  );
};

export default SpeakerProvider;
