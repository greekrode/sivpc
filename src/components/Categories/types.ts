export interface CategoryItem {
  name: string;
  duration: string;
  price: string;
}

export interface Category {
  title: string;
  items: CategoryItem[];
}

export interface ExamCategory {
  name: string;
  ageGroup: string;
  price: string;
}

export interface OpenCategory {
  group: string;
  age: string;
  duration: string;
  price: string;
}

export const periodCategories: { [key: string]: Category[] } = {
  "Baroque Category": [
    {
      title: "Petite",
      items: [
        { name: "7 years old and below", duration: "max. 2 mins", price: "S$168" },
      ],
    },
    {
      title: "Junior",
      items: [{ name: "10 years old and below", duration: "max. 4 mins", price: "S$198" }],
    },
    {
      title: "Senior",
      items: [{ name: "13 years old and below", duration: "max. 5 mins", price: "S$228" }],
    },
    {
      title: "Artist",
      items: [
        { name: "14 years old and above", duration: "max. 7 mins", price: "S$288" },
      ],
    },
  ],
  "Classical Category": [
    {
      title: "Petite",
      items: [
        { name: "7 years old and below", duration: "max. 2 mins", price: "S$168" },
      ],
    },
    {
      title: "Junior",
      items: [{ name: "10 years old and below", duration: "max. 4 mins", price: "S$198" }],
    },
    {
      title: "Senior",
      items: [{ name: "13 years old and below", duration: "max. 5 mins", price: "S$228" }],
    },
    {
      title: "Artist",
      items: [
        { name: "14 years old and above", duration: "max. 7 mins", price: "S$288" },
      ],
    },
  ],
  "Romantic Category": [
    {
      title: "Petite",
      items: [
        { name: "7 years old and below", duration: "max. 2 mins", price: "S$168" },
      ],
    },
    {
      title: "Junior",
      items: [{ name: "10 years old and below", duration: "max. 4 mins", price: "S$198" }],
    },
    {
      title: "Senior",
      items: [{ name: "13 years old and below", duration: "max. 5 mins", price: "S$228" }],
    },
    {
      title: "Artist",
      items: [
        { name: "14 years old and above", duration: "max. 7 mins", price: "S$288" },
      ],
    },
  ],
  "20th Century Category": [
    {
      title: "Petite",
      items: [
        { name: "7 years old and below", duration: "max. 2 mins", price: "S$168" },
      ],
    },
    {
      title: "Junior",
      items: [{ name: "10 years old and below", duration: "max. 4 mins", price: "S$198" }],
    },
    {
      title: "Senior",
      items: [{ name: "13 years old and below", duration: "max. 5 mins", price: "S$228" }],
    },
    {
      title: "Artist",
      items: [
        { name: "14 years old and above", duration: "max. 7 mins", price: "S$288" },
      ],
    },
  ],
};

export const examCategories: ExamCategory[] = [
  { name: "Initial Grade", ageGroup: "all ages", price: "S$92" },
  { name: "Grade 1-2", ageGroup: "all ages", price: "S$138" },
  { name: "Grade 3-4", ageGroup: "all ages", price: "S$158" },
  { name: "Grade 5-6", ageGroup: "all ages", price: "S$178" },
  { name: "Grade 7-8", ageGroup: "all ages", price: "S$198" },
  { name: "Diploma", ageGroup: "all ages", price: "S$248" },
];

export const openCategories: OpenCategory[] = [
  {
    group: "Group A",
    age: "6 years old and below",
    duration: "max. 3 mins",
    price: "S$198",
  },
  {
    group: "Group B",
    age: "7 years old - 8 years old",
    duration: "max. 4 mins",
    price: "S$218",
  },
  {
    group: "Group C",
    age: "9 years old - 10 years old",
    duration: "max. 5 mins",
    price: "S$248",
  },
  {
    group: "Group D",
    age: "11 years old - 13 years old",
    duration: "max. 6 mins",
    price: "S$268",
  },
  {
    group: "Group E",
    age: "14 years old & above",
    duration: "max 7 mins",
    price: "S$288",
  },
]; 