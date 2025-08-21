export interface CategoryItem {
  name: string;
  duration: string;
  live_price: string;
  virtual_price: string;
}

export interface Category {
  title: string;
  items: CategoryItem[];
}

export interface PeriodCategoryData {
  categories: Category[];
  note: string;
}

export interface ExamCategory {
  name: string;
  ageGroup: string;
  live_price: string;
  virtual_price: string;
}

export interface OpenCategory {
  group: string;
  age: string;
  duration: string;
  live_price: string;
  virtual_price: string;
}

export const periodCategories: { [key: string]: PeriodCategoryData } = {
  "Baroque Category": {
    categories: [
      {
        title: "Petite",
        items: [
          {
            name: "7 years old and below",
            duration: "max. 2 mins",
            virtual_price: "S$88",
            live_price: "S$128",
          },
        ],
      },
      {
        title: "Junior",
        items: [
          {
            name: "10 years old and below",
            duration: "max. 4 mins",
            virtual_price: "S$108",
            live_price: "S$148",
          },
        ],
      },
      {
        title: "Senior",
        items: [
          {
            name: "13 years old and below",
            duration: "max. 5 mins",
            virtual_price: "S$128",
            live_price: "S$168",
          },
        ],
      },
      {
        title: "Artist",
        items: [
          {
            name: "14 years old and above",
            duration: "max. 7 mins",
            virtual_price: "S$148",
            live_price: "S$188",
          },
        ],
      },
    ],
    note: "Participants must perform one polyphonic piece from the Baroque era.",
  },
  "Classical Category": {
    categories: [
      {
        title: "Petite",
        items: [
          {
            name: "7 years old and below",
            duration: "max. 2 mins",
            virtual_price: "S$88",
            live_price: "S$128",
          },
        ],
      },
      {
        title: "Junior",
        items: [
          {
            name: "10 years old and below",
            duration: "max. 4 mins",
            virtual_price: "S$108",
            live_price: "S$148",
          },
        ],
      },
      {
        title: "Senior",
        items: [
          {
            name: "13 years old and below",
            duration: "max. 5 mins",
            virtual_price: "S$128",
            live_price: "S$168",
          },
        ],
      },
      {
        title: "Artist",
        items: [
          {
            name: "14 years old and above",
            duration: "max. 7 mins",
            virtual_price: "S$148",
            live_price: "S$188",
          },
        ],
      },
    ],
    note: "This category includes pieces composed by <i>Haydn, Beethoven, Mozart, Schubert, Clementi, Kuhlau, Dussek, Cimarosa, Soler,</i> and other composers whose works were written between 1730 and 1820.",
  },
  "Romantic Category": {
    categories: [
      {
        title: "Petite",
        items: [
          {
            name: "7 years old and below",
            duration: "max. 2 mins",
            virtual_price: "S$88",
            live_price: "S$128",
          },
        ],
      },
      {
        title: "Junior",
        items: [
          {
            name: "10 years old and below",
            duration: "max. 4 mins",
            virtual_price: "S$108",
            live_price: "S$148",
          },
        ],
      },
      {
        title: "Senior",
        items: [
          {
            name: "13 years old and below",
            duration: "max. 5 mins",
            virtual_price: "S$128",
            live_price: "S$168",
          },
        ],
      },
      {
        title: "Artist",
        items: [
          {
            name: "14 years old and above",
            duration: "max. 7 mins",
            virtual_price: "S$148",
            live_price: "S$188",
          },
        ],
      },
    ],
    note: "Participants must perform one piece / one movement from the Romantic era.",
  },
  "20th Century Category": {
    categories: [
      {
        title: "Petite",
        items: [
          {
            name: "7 years old and below",
            duration: "max. 2 mins",
            virtual_price: "S$88",
            live_price: "S$128",
          },
        ],
      },
      {
        title: "Junior",
        items: [
          {
            name: "10 years old and below",
            duration: "max. 4 mins",
            virtual_price: "S$108",
            live_price: "S$148",
          },
        ],
      },
      {
        title: "Senior",
        items: [
          {
            name: "13 years old and below",
            duration: "max. 5 mins",
            virtual_price: "S$128",
            live_price: "S$168",
          },
        ],
      },
      {
        title: "Artist",
        items: [
          {
            name: "14 years old and above",
            duration: "max. 7 mins",
            virtual_price: "S$148",
            live_price: "S$188",
          },
        ],
      },
    ],
    note: "Participants must perform one piece / one movement from the 20th Century era.",
  },
};

export const examCategories: ExamCategory[] = [
  {
    name: "Initial Grade",
    ageGroup: "all ages",
    live_price: "S$98",
    virtual_price: "S$68",
  },
  {
    name: "Grade 1-2",
    ageGroup: "all ages",
    live_price: "S$128",
    virtual_price: "S$98",
  },
  {
    name: "Grade 3-4",
    ageGroup: "all ages",
    live_price: "S$158",
    virtual_price: "S$128",
  },
  {
    name: "Grade 5-6",
    ageGroup: "all ages",
    live_price: "S$188",
    virtual_price: "S$158",
  },
  {
    name: "Grade 7-8",
    ageGroup: "all ages",
    live_price: "S$218",
    virtual_price: "S$188",
  },
];

export const openCategories: OpenCategory[] = [
  {
    group: "Group A",
    age: "6 years old and below",
    duration: "max. 3 mins",
    live_price: "S$138",
    virtual_price: "S$108",
  },
  {
    group: "Group B",
    age: "7-8 years old",
    duration: "max. 4 mins",
    live_price: "S$158",
    virtual_price: "S$128",
  },
  {
    group: "Group C",
    age: "9-10 years old",
    duration: "max. 5 mins",
    live_price: "S$178",
    virtual_price: "S$148",
  },
  {
    group: "Group D",
    age: "11-13 years old",
    duration: "max. 6 mins",
    live_price: "S$198",
    virtual_price: "S$168",
  },
  {
    group: "Group E",
    age: "14 years old and above",
    duration: "max 7 mins",
    live_price: "S$218",
    virtual_price: "S$188",
  },
];
