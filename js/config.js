// App identity. A new subject built from this engine changes only this file (plus the content in js/content/).
export const APP = {
  name: 'BizQuest',
  icon: '📈',
  course: 'IB Business HL',
  // Progress is kept in localStorage under this key. Apps hosted on the same domain (e.g. one GitHub Pages
  // account) share storage, so every subject needs its own key.
  storageKey: 'bizquest.v1',
  // Level titles, one per 250 XP.
  levels: ['Intern', 'Junior Analyst', 'Analyst', 'Senior Analyst', 'Finance Manager',
    'Head of Finance', 'Finance Director', 'CFO', 'CEO', 'Business Legend'],
  voiceTest: 'Profit is not the same as cash. Remember that and you are already ahead of half the class.'
};
