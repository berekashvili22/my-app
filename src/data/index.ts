interface MenuButton {
  id: string;
  title: string;
}

interface FeatureItem {
  id: string;
  logo: string;
  title: string;
  subTitle: string;
}

interface Data {
  mainTitle: string;
  subTitle: string;
  menuButtonsList: MenuButton[];
  defaultActiveButtonId: string;
  features: {
    [key: string]: {
      id: string;
      mainCard: {
        image: string;
        title: string;
        subTitle: string;
        text: string;
      };
      leftItems: FeatureItem[];
      rightItems: FeatureItem[];
    };
  };
}

const data: Data = {
  mainTitle: "Easy Turn-Key Integration",
  subTitle:
    "Increase job satisfaction, improve engagement, decrease burnout and lower payroll liability by reimagining what employees can do with their PTO.",
  menuButtonsList: [
    { id: "1", title: "Small Business" },
    { id: "2", title: "Medium Business" },
    { id: "3", title: "Enterprise" },
  ],
  defaultActiveButtonId: "1",
  features: {
    "1": {
      id: "1",
      mainCard: {
        image: "/profile.png",
        title: "Lauren Robson",
        subTitle: "HR Director",
        text: "“I want to lower PTO liability and keep my employess happy. I want to lower PTO liability.”",
      },
      leftItems: [
        {
          id: "10",
          logo: "/logo.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "11",
          logo: "/logo.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "12",
          logo: "/logo.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
      ],
      rightItems: [
        {
          id: "13",
          logo: "/logo.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "14",
          logo: "/logo.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "15",
          logo: "/logo.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
      ],
    },
    "2": {
      id: "2",
      mainCard: {
        image: "/profile.png",
        title: "Lauren Robson 2",
        subTitle: "HR Director",
        text: "“I want to lower PTO liability and keep my employess happy. I want to lower PTO liability.”",
      },
      leftItems: [
        {
          id: "16",
          logo: "/logo1.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "17",
          logo: "/logo1.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "18",
          logo: "/logo1.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
      ],
      rightItems: [
        {
          id: "19",
          logo: "/logo1.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "20",
          logo: "/logo1.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "21",
          logo: "/logo1.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
      ],
    },
    "3": {
      id: "3",
      mainCard: {
        image: "/profile.png",
        title: "Lauren Robson 3",
        subTitle: "HR Director",
        text: "“I want to lower PTO liability and keep my employess happy. I want to lower PTO liability.”",
      },
      leftItems: [
        {
          id: "22",
          logo: "/logo2.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "23",
          logo: "/logo2.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "24",
          logo: "/logo2.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
      ],
      rightItems: [
        {
          id: "25",
          logo: "/logo2.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "26",
          logo: "/logo2.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
        {
          id: "27",
          logo: "/logo2.png",
          title: "Sapling",
          subTitle: "HR Management",
        },
      ],
    },
  },
};

export default data;
