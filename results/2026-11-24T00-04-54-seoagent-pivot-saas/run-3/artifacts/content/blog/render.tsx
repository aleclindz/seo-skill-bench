import type { Block } from './types';

export function renderBlocks(blocks: Block[]) {
  return blocks.map((block, i) => {
    if (block.type === 'heading') {
      const Tag = block.level === 2 ? 'h2' : 'h3';
      return <Tag key={i}>{block.text}</Tag>;
    }
    if (block.type === 'list') {
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p key={i}>{block.text}</p>;
  });
}
