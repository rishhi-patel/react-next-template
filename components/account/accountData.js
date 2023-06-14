import business from "/public/images/icon/business.png";
import checking from "/public/images/icon/checking.png";
import savings from "/public/images/icon/savings.png";

import account_feature_1 from "/public/images/icon/account-feature-1.png";
import account_feature_2 from "/public/images/icon/account-feature-2.png";
import account_feature_3 from "/public/images/icon/account-feature-3.png";

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

export const open_account_data = [
  {
    id: 1,
    icon: account_feature_1,
    title: "No Minimum Balance Required",
    desc: "Taking the first step towards your dreams should be a breeze, not a burden.",
  },
  {
    id: 2,
    icon: account_feature_2,
    title: "No Monthly Account Fees",
    desc: "So that every month, you can focus on investing in your ambitions",
  },
  {
    id: 3,
    icon: account_feature_3,
    title: "No SSN Needed",
    desc: "All we need is basic information about you, your visa and passport",
  },
];
