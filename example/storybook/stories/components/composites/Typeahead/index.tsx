import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import { UsingComponent } from './UsingComponent';
import { UsingHook } from './UsingHook';

storiesOf('Typeahead', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Typeahead Component', () => <UsingComponent />)
  .add('Custom Typeahead using useTypeahead hook', () => <UsingHook />);