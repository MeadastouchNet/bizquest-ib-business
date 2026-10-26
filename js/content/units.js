// All units of IB Business Management (guide for first assessment 2024).
// A unit with `sections` is built and playable. A unit with only `planned` shows as "coming soon",
// and glossary terms can already point at its planned topics (the link switches on once it is built).
// To add a unit: create js/content/unitN.js in the same shape as unit3.js and replace its entry here.
// Check the planned topic titles against the official guide when building each unit.
import { unit3 } from './unit3.js';

const planned = (id, title, emoji, topics) => ({
  id, title, emoji,
  planned: topics.map(([sid, stitle, hl = false]) => ({ id: sid, title: stitle, hl }))
});

export const UNITS = [
  planned('1', 'Introduction to business management', '🏢', [
    ['1.1', 'Introduction to business management'], ['1.2', 'Types of business entities'], ['1.3', 'Business objectives'],
    ['1.4', 'Stakeholders'], ['1.5', 'Growth and evolution'], ['1.6', 'Multinational companies (MNCs)']]),
  planned('2', 'Human resource management', '👥', [
    ['2.1', 'Introduction to human resource management'], ['2.2', 'Organizational structure'], ['2.3', 'Leadership and management'],
    ['2.4', 'Motivation and demotivation'], ['2.5', 'Organizational (corporate) culture', true], ['2.6', 'Communication'],
    ['2.7', 'Industrial/employee relations', true]]),
  unit3,
  planned('4', 'Marketing', '📣', [
    ['4.1', 'Introduction to marketing'], ['4.2', 'Marketing planning'], ['4.3', 'Sales forecasting', true],
    ['4.4', 'Market research'], ['4.5', 'The seven Ps of the marketing mix'], ['4.6', 'International marketing', true]]),
  planned('5', 'Operations management', '🏭', [
    ['5.1', 'Introduction to operations management'], ['5.2', 'Operations methods'], ['5.3', 'Lean management and quality management', true],
    ['5.4', 'Location'], ['5.5', 'Break-even analysis'], ['5.6', 'Production planning', true],
    ['5.7', 'Crisis management and contingency planning', true], ['5.8', 'Research and development', true],
    ['5.9', 'Management information systems', true]])
];

export const BUILT = UNITS.filter(u => u.sections);
export const SECTIONS = BUILT.flatMap(u => u.sections.map(s => Object.assign(s, { unit: u.id })));
export const findSection = id => SECTIONS.find(s => s.id === id);
export const findUnit = id => UNITS.find(u => u.id === id);
/** Built section or planned topic for an id like "3.4" or "1.2", with its unit. */
export function findTopic(id) {
  const u = findUnit(String(id).split('.')[0]);
  if (!u) return null;
  const built = u.sections?.find(s => s.id === id);
  if (built) return { unit: u, topic: built, built: true };
  const p = u.planned?.find(s => s.id === id);
  return p ? { unit: u, topic: p, built: false } : null;
}
