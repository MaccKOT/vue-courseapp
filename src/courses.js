// Since we aren’t using a backend API, the data for our courses and lessons will be stored in a nested JavaScript array. This array will be used to populate the content of our app.

const courses = [
  {
    id: 1,
    title: 'Photography for Beginners',
    description: 'Phasellus ac tellus tincidunt...',
    lessons: [
      {
        id: 1,
        title: 'Welcome to the course',
        description: 'Lorem ipsum dolor sit amet...',
        vimeoId: 76979871,
      },
      {
        id: 2,
        title: 'How does a camera work?',
        description: 'Lorem ipsum dolor sit amet...',
        vimeoId: 76979871,
      },
    ],
  },
  {
    id: 2,
    title: 'Advanced Photography',
    description: 'Cras ut sem eu ligula luctus ornare quis nec arcu.',
    lessons: [
      {
        id: 1,
        title: 'Welcome to the course',
        description: 'Lorem ipsum dolor sit amet...',
        vimeoId: 76979871,
      },
      {
        id: 2,
        title: 'How does a camera work?',
        description: 'Lorem ipsum dolor sit amet...',
        vimeoId: 76979871,
      },
    ],
  },
];

export default courses;
