module.exports = function (plop) {
  /*
    function to judge if skip certain action
    if return any value action will be skiped
  */
  // const judgeSkipAction = (judgingData, message) => () => {
  //   if (!judgingData) {
  //     return message
  //   }
  // }

  plop.setGenerator('component', {
    description: 'Create React Component',

    prompts: [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'Component Name?:',
      },
      {
        type: 'list',
        name: 'Granularity',
        message: 'Granularity?:',
        choices: ['Atoms', 'Molecules', 'Organisms'],
      },
      // {
      //   type: 'confirm',
      //   name: 'StoryBook',
      //   message: 'StoryBook? (defualt: yes):',
      //   default: true,
      // },
      // {
      //   type: 'confirm',
      //   name: 'Tests',
      //   message: 'Tests? (default: yes):',
      //   default: true,
      // },
      // {
      //   type: 'confirm',
      //   name: 'TypeScript',
      //   message: 'TypeScript? (default: yes):',
      //   default: true,
      // },
    ],

    /* eslint-disable @typescript-eslint/no-unused-vars */
    actions: function (data) {
      const componentName = '{{pascalCase ComponentName}}'

      const componentBasePath = './src/components/{{lowerCase Granularity}}'
      const componentPath = `${componentBasePath}/${componentName}`

      const componentTemplatePath = 'template/component'

      const actionsWithTypeScript = [
        function () {
          console.log('\nWith TypeScript')
        },
        {
          type: 'add',
          path: `${componentPath}/${componentName}.tsx`,
          templateFile: `${componentTemplatePath}/component.tsx.hbs`,
        },
        {
          type: 'add',
          path: `${componentPath}/${componentName}.styled.ts`,
          templateFile: `${componentTemplatePath}/styled.ts.hbs`,
        },
        {
          type: 'add',
          path: `${componentPath}/${componentName}.test.tsx`,
          templateFile: `${componentTemplatePath}/test.tsx.hbs`,
          // skip: judgeSkipAction(data.Tests, 'tests.tsx was not created'),
        },
        {
          type: 'add',
          path: `${componentPath}/${componentName}.stories.tsx`,
          templateFile: `${componentTemplatePath}/stories.tsx.hbs`,
          // skip: judgeSkipAction(data.StoryBook, 'stories.tsx was not created'),
        },
      ]

      // const actionsWithNoTypeScript = [
      //   function () {
      //     console.log('No TypeScript')
      //   },
      // ]

      // const actions = data.TypeScript
      //   ? actionsWithTypeScript
      //   : actionsWithNoTypeScript

      const actions = actionsWithTypeScript

      return actions
    },
  })
}
