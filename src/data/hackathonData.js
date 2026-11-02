// Registration is handled by Google Forms only. Paste the form's share link here;
// while it is '#', the site shows "Registration opens soon".
export const REGISTRATION_URL = 'https://forms.gle/f43MWKpYHRbSTokC7'
// Set to true once registrations are over; "Register now" then shows the formsClosed message.
export const REGISTRATION_CLOSED = true

const DURATION = '8 hours'
const TEAM_SIZE = 'Solo or teams of up to 4 (1 to 4 members)'
const MODE = 'Offline at NIT Srinagar'
const ELIGIBILITY = 'Students from NITs, IITs, Central Universities, State Universities and other engineering institutions across the country.'
const WHAT_TO_BRING = 'A laptop and valid college ID.'

export const hackathonData = {
  eventName: 'NetworkX Hackathon',
  day: 'Day 1 of NetworkX · 28 October 2026',
  theme: 'Design. Deploy. Defend.',
  factsLabel: 'Event facts',
  registerButtonLabel: 'Register Your Team',
  prizesLinkLabel: 'View Prizes',
  terminalCommands: ['design --network', 'deploy --infrastructure', 'defend --perimeter'],
  terminalDescription: 'Build an enterprise network. Test every layer.',
  configTitle: 'Event details',
  domainPrompt: 'What you’ll do',
  prizePodiumLabel: 'Top prizes',
  duration: DURATION,
  durationNumber: '8',
  teamSize: TEAM_SIZE,
  mode: MODE,
  eligibility: ELIGIBILITY,
  organizer: 'Department of Training & Placement, NIT Srinagar',
  description: 'Teams will design, deploy, secure, troubleshoot and automate enterprise-grade network infrastructure using industry-standard tools.',
  facts: [
    { label: 'Mode', value: MODE },
    { label: 'Duration', value: DURATION },
    { label: 'Team size', value: TEAM_SIZE },
    { label: 'Eligibility', value: 'Open to Engineering Students' },
    { label: 'Total prize pool', value: '₹2,00,000' },
  ],
  domainsHeading: 'What you will be tested on',
  domainsNote: 'Every team receives the same set of questions to solve. Questions are revealed at the event.',
  domains: [
    { title: 'Enterprise Networking', description: 'Switching, routing and VLANs.', icon: 'network' },
    { title: 'Cybersecurity', description: 'Firewall configuration and system security.', icon: 'shield' },
    { title: 'Cloud Computing & Virtualization', description: 'Virtualization and cloud deployment.', icon: 'cloud' },
    { title: 'Network Automation', description: 'Scripting and automating configuration.', icon: 'automation' },
    { title: 'Infrastructure Monitoring & Management', description: 'Server infrastructure, monitoring and troubleshooting.', icon: 'monitor' },
  ],
  rules: [
    { label: 'Eligibility', value: ELIGIBILITY, icon: 'users' },
    { label: 'Team size', configKey: 'team_size', value: TEAM_SIZE, config: true },
    { label: 'Duration', configKey: 'duration', value: DURATION, config: true },
    { label: 'Mode', configKey: 'mode', value: MODE, config: true },
    { label: 'Format', value: 'All teams solve the same hands-on questions using industry-standard tools.', icon: 'network' },
    { label: 'What to bring', value: WHAT_TO_BRING, icon: 'laptop' },
    { label: 'Judging', value: 'Correctness, completeness, speed and approach.', icon: 'monitor' },
    { label: 'Fair play', value: "No plagiarism or unfair means. Organisers' decision is final.", icon: 'shield' },
  ],
  rulesHeading: 'Rules & eligibility',
  organizerPrefix: 'Organised by',
  prizePool: '₹2,00,000',
  prizePoolAmount: 200000,
  prizeHeading: 'TOTAL PRIZE POOL',
  firstPrize: { label: '1st Prize', amount: '₹1,00,000' },
  secondPrize: { label: '2nd Prize', amount: '₹50,000' },
  thirdPrize: { label: '3rd Prize', amount: '₹10,000' },
  otherPrizesLabel: 'More prizes',
  otherPrizes: ['4th', '5th', '6th', '7th'].map((place) => ({ label: `${place} Prize`, amount: '₹10,000' })),
  registrationIntroEyebrow: 'Team registration',
  registrationIntroHeading: ['Build your team.', 'Bring your best.'],
  registrationIntroCopy: 'Registration is open to teams of 1 to 4 members. Solo participants are welcome.',
  registrationLabels: {
    title: 'Register',
    checklistHeading: 'Keep these ready',
    checklist: [
      'Team name and college / institution',
      'Full name of every member (1 to 4)',
      'College ID card of every member (image or PDF)',
      'Team leader’s email and phone number',
    ],
    open: 'Register now',
    closed: 'Registration opens soon',
    formsClosed: 'Registration forms are closed.',
  },
  // Bank details shown in the popup before the Google Form opens.
  payment: {
    eyebrow: 'Step 1 of 2',
    title: 'Complete your payment',
    intro: 'Pay the registration fee by bank transfer before filling in the registration form.',
    feeLabel: 'Registration fee',
    fee: '₹1,000',
    feeNote: 'per team',
    steps: [
      'Note down the account details below.',
      'Pay through IMPS, NEFT or net banking.',
      'Take a screenshot and note your Transaction ID. You will attach both in the form.',
    ],
    bank: [
      { label: 'Bank and branch', value: 'Jammu and Kashmir Bank, R.E.C.' },
      { label: 'Account name', value: 'Director NIT IRG Other Receipts' },
      { label: 'Account number', value: '0391040510000006', mono: true },
      { label: 'IFSC code', value: 'JAKA0RECSGR', mono: true },
      { label: 'MICR code', value: '190051054', mono: true },
    ],
    copy: 'Copy',
    copied: 'Copied',
    continue: 'I have paid ₹1,000, open registration form',
    close: 'Close',
  },
}