
import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import food from './foods';
import review from './review';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef , review],
};
