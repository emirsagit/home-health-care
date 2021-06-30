/**
 * Dynamically create teams section
 */
const items = [
  {
    id: 1,
    imgSrc: './img/profile/1.jpg',
    personal_name: 'Prof. John Doe, M.D.',
    personal_spesification: 'Emergency Service',
    description: 'Lumbar and cervical disc herniation, spinal canal stenosis and spinal cord tumors, cerebrovascular diseases and brain tumors are areas of interest.',
  },
  {
    id: 2,
    imgSrc: './img/profile/2.jpg',
    personal_name: 'Dr. Emily Star, M.D.',
    personal_spesification: 'General Surgery',
    description: 'Abdominal contents including esophagus, stomach, small intestine, large intestine, liver, pancreas, gallbladder, appendix and bile ducts are areas of interest.',
  },
  {
    id: 3,
    imgSrc: './img/profile/3.jpg',
    personal_name: 'Nicolas Brown',
    personal_spesification: 'Public Relations',
    description: 'Director of Human Resources and Public Relations',
  },
  {
    id: 4,
    imgSrc: './img/profile/4.jpg',
    personal_name: 'Mariam Sarkozy',
    personal_spesification: 'Nurse',
    description: 'Director of Patient Care and Home Health Care',
  },
  {
    id: 5,
    imgSrc: './img/profile/5.jpg',
    personal_name: 'Jonathan Elafe',
    personal_spesification: 'Technical Specialists',
    description: 'Director of Medical Equipment and Devices',
  },
  {
    id: 6,
    imgSrc: './img/profile/6.jpg',
    personal_name: 'Emir Sağıt',
    personal_spesification: 'Software Engineer',
    description: 'Information Technology Director',
  },
];

// below funciton dynamically creates html tags, attributes, classes and text
function createElement(item, element, parent = null) {
  const createdElement = document.createElement(element.element);
  if (element.attributes) {
    const attributes = Object.keys(element.attributes);
    attributes.forEach((key) => {
      createdElement.setAttribute(key, element.attributes[key]);
    });
  }
  if (element.classes) {
    const { classes } = element;
    classes.forEach((key) => {
      createdElement.classList.add(key);
    });
  }
  if (element.text) {
    const textNodeElement = document.createTextNode(element.text);
    createdElement.appendChild(textNodeElement);
  }
  if (element.id) {
    createdElement.id = element.id;
  }
  // If createdElement is child I will append it to the parent
  if (parent) {
    parent.appendChild(createdElement);
  }
  // below I call createElement function until all the child elements were created
  if (element.children) {
    for (let i = 0; i < element.children.length; i += 1) {
      createElement(item, element.children[i], createdElement);
    }
  }
  return createdElement;
}

/* First I created the elements object and its nested children with classes, ids, attributes, text.
Then I call the above createElement function */
for (let i = 0; i < items.length; i += 1) {
  const elements = {
    element: 'div',
    id: i + 1,
    classes: ['layout-grid__column'],
    children: [
      {
        element: 'div',
        classes: ['team__wrapper'],
        children: [
          {
            element: 'div',
            classes: ['team__image-wrapper'],
            children: [
              {
                element: 'img',
                classes: ['team__image'],
                attributes: {
                  src: items[i].imgSrc,
                  alt: items[i].personal_name,
                },
              },
              {
                element: 'img',
                classes: ['team__image-span'],
                attributes: {
                  src: './img/black-white.jpg',
                  alt: 'black-white',
                },
              },
            ],
          },
          {
            element: 'div',
            classes: ['team__content'],
            children: [
              {
                element: 'p',
                classes: ['team__title'],
                text: items[i].personal_name,
              },
              {
                element: 'p',
                classes: ['team__spesification'],
                text: items[i].personal_spesification,
              },
              {
                element: 'hr',
                classes: ['team__hr'],
              },
              {
                element: 'p',
                classes: ['team__p'],
                text: items[i].description,
              },
            ],
          },
        ],
      },
    ],
  };
  // call createElement function for each item
  const createdElement = createElement(items[i], elements);
  // above function return the created parent html element. Below I appended it to the DOM
  document.getElementById('team').appendChild(createdElement);
}