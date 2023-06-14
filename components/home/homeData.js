import tab_card_1 from "/public/images/icon/tab-card-1.png";
import tab_card_11 from "/public/images/icon/tab-card-11.png";
import tab_card_2 from "/public/images/icon/tab-card-2.png";
import tab_card_22 from "/public/images/icon/tab-card-22.png";
import tab_card_3 from "/public/images/icon/tab-card-3.png";
import tab_card_33 from "/public/images/icon/tab-card-33.png";
import tab_card_4 from "/public/images/icon/tab-card-4.png";
import tab_card_44 from "/public/images/icon/tab-card-44.png";

import business from "/public/images/icon/business.png";
import checking from "/public/images/icon/checking.png";
import savings from "/public/images/icon/savings.png";

import blog_1 from "/public/images/blog-1.png";
import blog_2 from "/public/images/blog-2.png";
import blog_3 from "/public/images/blog-3.png";

export const card_data = [
  {
    id: 1,
    img1: tab_card_1,
    img2: tab_card_11,
    heading_text: "Secured Cards",
    link: "/",
  },
  {
    id: 2,
    img1: tab_card_2,
    img2: tab_card_22,
    heading_text: "Balance Transfer",
    link: "/",
  },
  {
    id: 3,
    img1: tab_card_3,
    img2: tab_card_33,
    heading_text: "Travel",
    link: "/",
  },
  {
    id: 4,
    img1: tab_card_4,
    img2: tab_card_44,
    heading_text: "Cashback",
    link: "/",
  },
];

export const business_solutions_data = [
  {
    id: 1,
    title: "Checking Account",
    icon: checking,
    desc: "Choose from our checking options that allow you to earn interest, avoid fees, and easily manage your account.",
    link: "/register",
  },
  {
    id: 2,
    title: "Savings Accounts",
    icon: savings,
    desc: "Save for your goals and watch your money grow with a CD, a money market account, a savings account.Your future starts now.",
    link: "/register",
  },
  {
    id: 3,
    title: "Business Account",
    icon: business,
    desc: "Take charge of your business banking with a business bank account. Services including virtual cards, team management and more.",
    link: "/register",
  },
];

export const articles_data = [
  {
    id: 1,
    title: "The future of fraud protection.",
    desc: "Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra.",
    image: blog_1,
    author: "Hans Murazik",
    date: "03 Jan 2023",
    details_link: "/",
  },
  {
    id: 2,
    title: "Digital Banking Services",
    desc: "Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra.",
    image: blog_2,
    author: "Hans Murazik",
    date: "03 Jan 2023",
    details_link: "/",
  },
  {
    id: 3,
    title: "Mobile Banking at a Glance",
    desc: "Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra.",
    image: blog_3,
    author: "Hans Murazik",
    date: "03 Jan 2023",
    details_link: "/",
  },
];
