import {
    Redux,
    ReactiveX,
    MySql,
} from '../components/Icons/icons'

const icons = Object.entries({
    Redux,
    React: ReactiveX,
    MySQL: MySql,
  }).reduce(
    (acc, [label, Icon]) => ({
      ...acc,
      [label]: {
        label,
        Icon,
      },
    }),
    {}
)

export default [
    {
      title: 'Personal Development',
      link: 'https://www.craigkaiser.com',
      position: 'Hacker',
      durations: [
        {
          begin:'2018-10',
          end: 'current'
        },
      ],
      description: 'Designed my own website using new languages and technology',
      stack: [
        icons.React,
        icons.Redux,
      ],
    },
]