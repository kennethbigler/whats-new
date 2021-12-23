import React from 'react';
import { useParameter } from '@storybook/api';
import { Title, Description } from '@storybook/addon-docs';
import { PARAM_KEY } from '../constants';

const WhatsNewPanel = (props: any) => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value : 'No Markdown Defined';
  return (
    <>
      <Title>What&apos;s New?</Title>
      <Description>{item}</Description>
    </>
  );
};

export default WhatsNewPanel;
