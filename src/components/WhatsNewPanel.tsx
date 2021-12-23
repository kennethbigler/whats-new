import React from 'react';
import { useParameter } from '@storybook/api';
import ReactMarkdown from 'react-markdown'
import { PARAM_KEY } from '../constants';

const WhatsNewPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value : '# No Changelog Provided';
  return (
    <div style={{ margin: 15 }}>
      <ReactMarkdown>{item}</ReactMarkdown>
    </div>
  );
};

export default WhatsNewPanel;
