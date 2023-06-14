export const navData = [
  {
    id: "au@81",
    itm: "Home",
    url: "/",
    dropdown: false,
  },
  {
    id: "au@2_91",
    itm: "About Us",
    url: "/about",
    dropdown: false,
  },
  {
    id: "au@201",
    itm: "Product",
    url: "#",
    dropdown: true,
    dropdown_itms: [
      {
        id: "du@01",
        dp_itm: "Account",
        url: "#",
        sbu_dropdown: true,
        sub_items: [
          {
            id: "sub@01",
            sub_itm: "Account",
            url: "/account",
          },
          {
            id: "sub@02",
            sub_itm: "Account Details",
            url: "/account-details",
          },
        ],
      },
      {
        id: "du@02",
        dp_itm: "Product",
        url: "/product",
      },
      {
        id: "du@03",
        dp_itm: "Loan",
        url: "#",
        sbu_dropdown: true,
        sub_items: [
          {
            id: "sub@001",
            sub_itm: "Business Loans",
            url: "/business-loan",
          },
          {
            id: "sub@002",
            sub_itm: "Educations Loans",
            url: "/educations-loan",
          },
          {
            id: "sub@003",
            sub_itm: "Home Loans",
            url: "/home-loan",
          },
          {
            id: "sub@004",
            sub_itm: "Car Loans",
            url: "/car-loan",
          },
          {
            id: "sub@005",
            sub_itm: "Personal Loans",
            url: "/personal-loan",
          },
        ],
      },
      {
        id: "du@04",
        dp_itm: "Card",
        url: "/card",
      },
    ],
  },
  {
    id: "au@2331",
    itm: "Pages",
    url: "#",
    dropdown: true,
    dropdown_itms: [
      {
        id: "du@01s",
        dp_itm: "Affiliate",
        url: "/affiliate",
      },
      {
        id: "du@02s",
        dp_itm: "Blog",
        url: "/Blog",
        sbu_dropdown: true,
        sub_items: [
          {
            id: "sub@0001",
            sub_itm: "Blog List",
            url: "/blog-list",
          },
          {
            id: "sub@0002",
            sub_itm: "Blog Grid",
            url: "/blog-grid",
          },
          {
            id: "sub@0003",
            sub_itm: "Blog Single",
            url: "/blog-single",
          },
        ],
      },
      {
        id: "du@03s",
        dp_itm: "Remittance",
        url: "/remittance",
      },
      {
        id: "du@04s",
        dp_itm: "Career Single",
        url: "/career-single",
      },
      {
        id: "du@05s",
        dp_itm: "Faqs",
        url: "/faqs",
      },
      {
        id: "du@06s",
        dp_itm: "login",
        url: "/login",
      },
      {
        id: "du@07s",
        dp_itm: "Password Set",
        url: "/password-set",
      },
      {
        id: "du@08s",
        dp_itm: " Varify Number",
        url: "/varify-number",
      },
      {
        id: "du@09s",
        dp_itm: "OTP",
        url: "/otp",
      },
      {
        id: "du@10s",
        dp_itm: "Terms Conditions",
        url: "/privacy-policy",
      },
    ],
  },
  {
    id: "au@221",
    itm: "Contact Us",
    url: "/contact",
    dropdown: false,
  },
];
