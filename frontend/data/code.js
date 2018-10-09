import {
    Redux,
    ReactiveX,
    MySQL,
    KE,
    Perl5,
    Python,
    Linux,
} from '../components/Icons/icons'

const icons = Object.entries({
    Redux,
    React: ReactiveX,
    MySQL,
    KE,
    Perl5,
    Python,
    Linux,
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
      title: 'Personal Website',
      link: null,
      position: 'Hacker',
      description: 'Designed my own website using new languages and technology.\
      Had a fun time learning React and Redux in the frontend as well as getting to\
      learn Perl6 for the backend. This provided a unique challenge of having\
      to use all new languages for the whole site',
      stack: [
        icons.React,
        icons.Redux,
        icons.Perl5,
      ],
    },
    {
      title: 'KaiserEngineering',
      link: 'https://www.kaiserengineering.io',
      position: 'Co-Founder',
      description: 'Took a simple idea from an idea on paper to a profitable company\
        driven by passion and enthusiasm for technology and creating. We currently have\
        one product on the market and one under development. The DigitalDash our flagship\
        product I have been the lead developer on the Python GUI to render car data onto\
        a screen.',
      stack: [
        icons.Python,
        icons.Perl5,
        icons.MySQL,
      ],
    },
    {
      title: 'Request Tracker',
      link: 'https://www.bestpractical.com',
      position: 'Software Engineer',
      description: 'Worked directly with customers to spec out and create\
      custom features extending the open source ticket tracking software we made.\
      The code base is Perl5 with vanilla JS/CSS in the frontend. This work was\
      extremely rewarding because I am involed in all componets of development\
      from server->backend->frontend.',
      stack: [
        icons.Perl5,
        icons.MySQL,
        icons.Linux,
      ],
    }
]