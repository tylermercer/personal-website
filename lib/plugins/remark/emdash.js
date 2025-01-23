import { visit } from 'unist-util-visit';

/**
 * Plugin to add support for emdashes.
 *
 * @type {import('unified').Plugin<[Options?]|void[], Root>}
 */
export default function remarkEmdash() {
  return function transformer(tree) {
    visit(tree, 'text', (node) => {
      node.value = node.value.replace(/---/g, '—');
    });
  };
}