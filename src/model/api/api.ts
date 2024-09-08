import { IBlogData, ICommentsData, IFakeData, IOurTeamData } from "../interface/interface"

export const FakeData: IFakeData[] = [
  {
    img: '/Icon_ship.svg',
    title: 'Sea Transport Services',
    text: 'Following the quality of our service thus having gained trust of our many clients.'
  },
  {
    img: '/Icon_build.svg',
    title: 'Warehousing Services',
    text: 'Following the quality of our service thus having gained trust of our many clients.'
  },
  {
    img: '/Icon_airplane.svg',
    title: 'Air Fright Services',
    text: 'Following the quality of our service thus having gained trust of our many clients.'
  },
  {
    img: '/Icon_car.svg',
    title: 'Local Shipping Services',
    text: 'Following the quality of our service thus having gained trust of our many clients.'
  }
]

export const WorkData: IFakeData[] = [
  {
    img: '/1.png',
    title: 'Liquid Transportation',
    text: 'Premium Tankers'
  },
  {
    img: '/2.png',
    title: 'Packaging Solutions',
    text: 'Warehouse Management'
  },
  {
    img: '/3.png',
    title: 'Contract Logistics',
    text: 'Road Transportation'
  },
  {
    img: '/4.png',
    title: 'Warehouse & Distribution',
    text: 'Large Warehouse'
  },
  {
    img: '/5.png',
    title: 'Specialized Transport',
    text: 'Ocean Transports'
  }
]

export const CommentsData: ICommentsData[] = [
  {
    img: '/User.png',
    name: 'Kathleen Smith',
    company: 'Fuel Company',
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    rating: 4
  },
  {
    img: '/User2.png',
    name: 'John Martin',
    company: 'Restoration Company',
    text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    rating: 5
  }
]

export const OurTeamData: IOurTeamData[] = [
  {
    name: 'Jessca Arow',
    company: 'Designer',
    img: '/Photo1.jpg',
    social: ['Inst', 'Facebook', 'Twitter']
  },
  {
    name: 'Kathleen Smith',
    company: 'Designer ',
    img: '/Photo2.jpg',
    social: ['Link', 'Inst', 'Facebook', 'Twitter']
  },
  {
    name: 'Rebecca Tylor',
    company: 'Designer',
    img: '/Photo3.jpg',
    social: ['Inst', 'Twitter']
  }
]

export const BlogData: IBlogData[] = [
  {
    img: '/Back_blog1.jpg',
    date: {
      day: '08',
      month: 'September'
    },
    title: 'Inland freight a worthy solution for your business',
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    list: [
      'Urgent transport solutions',
      'Reliable & experienced staffs',
      'Urgent transport solutions',
      'Reliable & experienced staffs'
    ]
  },
  {
    img: '/Back_blog2.jpg',
    date: {
      day: '12',
      month: 'March'
    },
    title: 'How technology can help redraw the supply chain map',
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    list: [
      'Urgent transport solutions',
      'Reliable & experienced staffs',
      'Urgent transport solutions',
      'Reliable & experienced staffs'
    ]
  },
  {
    img: '/Back_blog3.jpg',
    date: {
      day: '25',
      month: 'March'
    },
    title: 'Five things you should have ready for your broker',
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    list: [
      'Urgent transport solutions',
      'Reliable & experienced staffs',
      'Urgent transport solutions',
      'Reliable & experienced staffs'
    ]
  },
  {
    img: '/Back_blog4.jpg',
    date: {
      day: '28',
      month: 'March'
    },
    title: 'Four simple tips for becoming a healthier truck driver',
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    list: [
      'Urgent transport solutions',
      'Reliable & experienced staffs',
      'Urgent transport solutions',
      'Reliable & experienced staffs'
    ]
  },
  {
    img: '/Back_blog5.jpg',
    date: {
      day: '30',
      month: 'March'
    },
    title: 'What Is The Role Of A Logistics Operations Manager',
    text: 'We are dedicated in creating added value for our customers by implementing modern technology in our work. ',
    list: [
      'Urgent transport solutions',
      'Reliable & experienced staffs',
      'Urgent transport solutions',
      'Reliable & experienced staffs'
    ]
  }
]