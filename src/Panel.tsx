import React from "react";
import { AddonPanel } from "@storybook/components";
import WhatsNewPanel from './components/WhatsNewPanel';

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  return (
    <AddonPanel {...props}>
      <WhatsNewPanel />
    </AddonPanel>
  );
};
