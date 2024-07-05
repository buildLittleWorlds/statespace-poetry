import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

type ContentItem = CollectionEntry<'poems'> | CollectionEntry<'essays'>;

export async function getRelatedContent(type: 'poem' | 'essay', slug: string) {
  const collection = type === 'poem' ? 'essays' : 'poems';
  const relatedField = type === 'poem' ? 'relatedPoem' : 'relatedEssay';
  
  const allContent = await getCollection(collection);
  return allContent.find((item: ContentItem) => {
    if (type === 'poem' && 'relatedPoem' in item.data) {
      return item.data.relatedPoem === slug.replace(/\.(md|mdx)$/, '');
    } else if (type === 'essay' && 'relatedEssay' in item.data) {
      return item.data.relatedEssay === slug.replace(/\.(md|mdx)$/, '');
    }
    return false;
  });
}