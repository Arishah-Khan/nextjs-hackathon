 const food = {
  name: 'food',
  type: 'document',
  title: 'Food',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Food Name',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description:
        'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Current Price',
    },
    {
      name: 'originalPrice',
      type: 'number',
      title: 'Original Price',
      description: 'Price before discount (if any)',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for categorization (e.g., Best Seller, Popular, New)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Food Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'smallImages',
      type: 'array',
      title: 'Small Images',
      of: [{ type: 'image' }],
      description: 'Array of small images for the food item',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Short description of the food item',
    },
    {
      name: 'detailDescription',
      type: 'text',
      title: 'Detailed Description',
      description: 'Detailed description of the food item',
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Available',
      description: 'Availability status of the food item',
    },
    {
      name: 'id',
      type: 'string',
      title: 'Food ID',
      description: 'Unique identifier for the food item',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Overall rating of the food item (e.g., out of 5)',
    },
    {
      name: 'reviews',
      type: 'number',
      title: 'Reviews',
      description: 'numerical ratings for individual reviews',
    },
    {
      name: 'benefits',
      type: 'array',
      title: 'Benefits',
      of: [{ type: 'string' }],
      description: 'Array of benefits associated with the food item',
    },
  ],
};


export default food