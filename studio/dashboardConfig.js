export default {
  widgets: [
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
                  buildHookId: '616dc815ce48ec15c6260a13',
                  title: 'LIVE Back-end',
                  name: 'the-brooklyn-studio-studio',
                  apiId: '00c0583e-4b97-42a7-a1ad-3d5fd8729974'
                },
                {
                  buildHookId: '616dc815546d21097fbe0bb2',
                  title: 'LIVE Front-end',
                  name: 'the-brooklyn-studio',
                  apiId: 'a5314cb6-038a-4b7a-99cd-fbbae8ca7ae2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zacklerner/the-brooklyn-studio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://the-brooklyn-studio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}}
  ]
}
