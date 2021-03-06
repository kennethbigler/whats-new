import React from "react";
import { Button } from "./Button";
import WhatsNew from './WHATS_NEW.md';

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    whatsNewSource: WhatsNew,
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
