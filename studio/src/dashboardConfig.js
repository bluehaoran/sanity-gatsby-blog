export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6ae635a45deb9cb194110a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bczr7879',
                  apiId: '65f85daa-be83-47cd-821e-b2701f35d22e'
                },
                {
                  buildHookId: '5f6ae6359cc57a9e89cf6d82',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sccmbvbi',
                  apiId: '26e3d8b9-be1a-4bb0-8b8e-feb3d83a0aaa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bluehaoran/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sccmbvbi.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
