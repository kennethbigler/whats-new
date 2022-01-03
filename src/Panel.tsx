import React from "react";
import { AddonPanel } from "@storybook/components";
import { useParameter } from '@storybook/api';
import { Description } from "@storybook/components";
import { PARAM_KEY } from './constants';

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value : '# No Changelog Provided';

  return (
    <AddonPanel {...props}>
      <div style={{ margin: 15 }}>
        <Description markdown={item} />
      </div>
    </AddonPanel>
  );
};
