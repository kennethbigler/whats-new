import React from 'react';
import { useParameter } from '@storybook/api';
import { Description } from "@storybook/components";
import { PARAM_KEY } from '../constants';

const WhatsNewPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value : '# No Changelog Provided';
  return (
    <div style={{ margin: 15 }}>
      <Description markdown={item} />
    </div>
  );
};

export default WhatsNewPanel;
