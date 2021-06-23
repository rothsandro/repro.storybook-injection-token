import { moduleMetadata } from '@storybook/angular';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';
import { DEMO_ONE, DEMO_TWO } from './tokens';


export default {
  title: 'Example/Button',
  component: Button,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      providers: [
        {
          provide: DEMO_ONE,
          useValue: 'one',
        },
        {
          provide: DEMO_TWO,
          useValue: 'two',
        }
      ]
    })
  ]
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});