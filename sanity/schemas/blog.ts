export default {
  name: 'blog',
  type: 'document',
  title: 'Image Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Image',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug for your Image',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Published by:',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Description:',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'dateAdded',
      type: 'string',
      title: 'Date Added',
      description: 'The date when the blog article was added.',
    },
  ],
}
