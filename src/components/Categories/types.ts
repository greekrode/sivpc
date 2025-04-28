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
  Baroque: [
    {
      title: "Petite",
      items: [
        { name: "7 y.o. and below", duration: "max. 2 mins", price: "S$168" },
      ],
    },
    {
      title: "Junior",
      items: [{ name: "8 - 10 y.o", duration: "max. 4 mins", price: "S$198" }],
    },
    {
      title: "Senior",
      items: [{ name: "11 - 13 y.o", duration: "max. 5 mins", price: "S$228" }],
    },
    {
      title: "Artist",
      items: [
        { name: "14 y.o and above", duration: "max. 7 mins", price: "S$288" },
      ],
    },
  ],
  Classical: [
    {
      title: "Petite",
      items: [
        { name: "7 y.o. and below", duration: "max. 2 mins", price: "S$168" },
      ],
    },
    {
      title: "Junior",
      items: [{ name: "8 - 10 y.o", duration: "max. 4 mins", price: "S$198" }],
    },
    {
      title: "Senior",
      items: [{ name: "11 - 13 y.o", duration: "max. 5 mins", price: "S$228" }],
    },
    {
      title: "Artist",
      items: [
        { name: "14 y.o and above", duration: "max. 7 mins", price: "S$288" },
      ],
    },
  ],
  Romantic: [
    {
      title: "Petite",
      items: [
        { name: "7 y.o. and below", duration: "max. 2 mins", price: "S$168" },
      ],
    },
    {
      title: "Junior",
      items: [{ name: "8 - 10 y.o", duration: "max. 4 mins", price: "S$198" }],
    },
    {
      title: "Senior",
      items: [{ name: "11 - 13 y.o", duration: "max. 5 mins", price: "S$228" }],
    },
    {
      title: "Artist",
      items: [
        { name: "14 y.o and above", duration: "max. 7 mins", price: "S$288" },
      ],
    },
  ],
  "20th Century": [
    {
      title: "Petite",
      items: [
        { name: "7 y.o. and below", duration: "max. 2 mins", price: "S$168" },
      ],
    },
    {
      title: "Junior",
      items: [{ name: "8 - 10 y.o", duration: "max. 4 mins", price: "S$198" }],
    },
    {
      title: "Senior",
      items: [{ name: "11 - 13 y.o", duration: "max. 5 mins", price: "S$228" }],
    },
    {
      title: "Artist",
      items: [
        { name: "14 y.o and above", duration: "max. 7 mins", price: "S$288" },
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
    age: "6 y.o and below",
    duration: "max. 3 mins",
    price: "S$198",
  },
  {
    group: "Group B",
    age: "7 y.o - 8 y.o",
    duration: "max. 4 mins",
    price: "S$218",
  },
  {
    group: "Group C",
    age: "9 y.o - 10 y.o",
    duration: "max. 5 mins",
    price: "S$248",
  },
  {
    group: "Group D",
    age: "11 y.o - 12 y.o",
    duration: "max. 6 mins",
    price: "S$268",
  },
  {
    group: "Group E",
    age: "14 y.o & above",
    duration: "max 7 mins",
    price: "S$288",
  },
]; 