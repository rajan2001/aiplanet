import { EosIconsAi } from './components/svg/feature/ai';
import { EosIconsAiHealing } from './components/svg/feature/ai-healing';
import { EosIconsDataScientist } from './components/svg/feature/datasci';
import { CarbonNotebookReference } from './components/svg/section/card';
import { LetsIconsGroupFill } from './components/svg/section/group';
import { FluentContactCard28Regular } from './components/svg/section/idcard';
import { PhRobotLight } from './components/svg/section/robot';

export const features = [
  {
    id: 1,
    heading: '100K+',
    subheadingL: 'AI model submissions',
    icon: EosIconsAi,
    line: true,
  },
  {
    id: 2,
    heading: '50K+',
    subheadingL: 'Data Scientists',
    icon: EosIconsDataScientist,
    line: true,
  },
  {
    id: 3,
    heading: '100+',
    subheadingL: 'AI Challenges hosted',
    icon: EosIconsAiHealing,
    line: false,
  },
];

export const sections = [
  {
    id: 1,
    heading: 'Prove your skills',
    paragraph:
      'Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.',
    icon: CarbonNotebookReference,
  },
  {
    id: 2,
    heading: 'Learn from community',
    paragraph:
      'One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.',
    icon: LetsIconsGroupFill,
  },
  {
    id: 3,
    heading: 'Challenge yourself',
    paragraph:
      'There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.',
    icon: PhRobotLight,
  },
  {
    id: 4,
    heading: 'Earn recognition',
    paragraph:
      'You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.',
    icon: FluentContactCard28Regular,
  },
];

export const filterStatus = [
  {
    id: 1,
    label: 'All',
    active: false,
  },
  {
    id: 2,
    label: 'Active',
    active: false,
  },
  {
    id: 3,
    label: 'Upcoming',
    active: false,
  },
  {
    id: 4,
    label: 'Ended',
    active: false,
  },
];

export const filterlevel = [
  {
    id: 1,
    label: 'Easy',
    active: false,
  },
  {
    id: 2,
    label: 'Medium',
    active: false,
  },
  {
    id: 3,
    label: 'Hard',
    active: false,
  },
];
