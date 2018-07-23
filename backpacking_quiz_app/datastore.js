'use strict';
/* global $ */



const STORE = [
  {
    question: 'What is one of the most important principles to follow when backpacking or camping?',
    answers: [
      'Always remeber to take advantage of what nature has to offer',
      'Leave no trace',
      'Moss always grows on the north side of a rock',
      'Be as loud as you want to outdoors because that\'s what adventure is all about'
    ],
    correctAnswer: 'Leave no trace',
    icon: 'https://i.imgur.com/Rue4wCj.png',
    alt: 'tent icon'
  },
  {
    question: 'What are the 10 essentials for backpacking or camping?',
    answers: [
      'Entertainment | Food | Tent | Cell Phone | Water Guns | Your pet | Cooler | Cooking utensils | Clothing | Portable sound system',
      'Cell phone | Junk food | binoculars | sunglasses | pepper spray | ice | Sleeping bag | Camera | Enertainment | Water',
      'Navigation | Sun protection | Insulation | First-aid supplies | Fire | Repair kit and tools | Nutrition | Hydration | Emergency Shelter',
      'GPS | Sunglasses | Tent | Hydration | Enertainment | Insulation | Bandages | Cooler | Tools | Books'
    ],
    correctAnswer: 'Navigation | Sun protection | Insulation | First-aid supplies | Fire | Repair kit and tools | Nutrition | Hydration | Emergency Shelter',
    icon: 'https://i.imgur.com/iQ0FBhB.png',
    alt: 'shield for 10 essentials icon'
  },
  {
    question: 'When backpacking what is the weight you should aim for when packing your backpack?',
    answers: [
      '25 lbs',
      '50 lbs',
      '70 lbs',
      '100 lbs'
    ],
    correctAnswer: '25 lbs',
    icon: 'https://i.imgur.com/uXukVjk.png',
    alt: 'weight icon'
  },
  {
    question: 'You are camping in bear country. How should you store your food?',
    answers: [
      'Bears are a myth. There\'s no need to worry about them',
      'Always store your food on you person at all times.',
      'Store your food in your tent',
      'Always use a bear canistern or hang your food and personal hygiene items on a tree limb in a bear backpacking'
    ],
    correctAnswer: 'Always use a bear canistern or hang your food and personal hygiene items on a tree limb in a bear backpacking',
    icon: 'https://i.imgur.com/i0Q515j.png',
    alt: 'bear paw icon'
  },
  {
    question: 'What should you never day hike without?',
    answers: [
      'Extra food',
      'Hat',
      'GPS',
      'Cell phone'
    ],
    correctAnswer: 'Extra food',
    icon: 'https://i.imgur.com/LHRMcBd.png',
    alt: 'hat icon'
  },
  {
    question: 'You forgot your water filter in the backcountry. What should you do?',
    answers: [
      'Just drink straight from the stream',
      'Drink your own urine',
      'Find a water source and boil the water to neutralize it',
      'Don\'t drink any water'
    ],
    correctAnswer: 'Find a water source and boil the water to neutralize it',
    icon: 'https://i.imgur.com/XEwf3tK.png',
    alt: 'water bottle icon'
  },
  {
    question: 'What is the safest way to cross a stream while hiking?',
    answers: [
      'Find flat rocks to hop across on',
      'Look for the deepest section and cross there',
      'Avoid acrossing where the current is strong. Look for a straight, wide, and shallow section.',
      'Always follow the marked route no matter what'
    ],
    correctAnswer: 'Avoid acrossing where the current is strong. Look for a straight, wide, and shallow section.',
    icon: 'https://i.imgur.com/Kk9t3qL.png',
    alt: 'stream icon'
  },
  {
    question: 'While hiking you get lost. What should you do now?',
    answers: [
      'Stay put and wait for someone to find you',
      'Follow streams or rivers. They will eventually lead to roads',
      'Take off running in one direction. you will eventually hit a trail.',
      'Eat all of your food now to get the most energy that you can.'
    ],
    correctAnswer: 'Stay put and wait for someone to find you',
    icon: 'https://i.imgur.com/A2cWS88.png',
    alt: 'compass icon'
  },
  {
    question: 'You just spotted a black bear while hiking. What should you do now?',
    answers: [
      'Play dead',
      'Throw your food at the bear so that it will be distracted',
      'Approach the bear. It might want to be friends with you!',
      'If you spot the bear before it spots you, back away keeping your eyes on the bear and wait for it to pass before continuing on.'
    ],
    correctAnswer: 'If you spot the bear before it spots you, back away keeping your eyes on the bear and wait for it to pass before continuing on.',
    icon: 'https://i.imgur.com/VwFRlXL.png',
    alt: 'bear head icon'
  },
  {
    question: 'What is the most dangerous animal in the wilderness?',
    answers: [
      'Grizzly bears',
      'Birds',
      'Insects',
      'Humanbeings'
    ],
    correctAnswer: 'Humanbeings',
    icon: 'https://i.imgur.com/YdcTVPW.png',
    alt: 'skull and crossbones icon'
  }
];
