# storybook-addon-whats-new

## What is it?

This is a Storybook addon intended to let users see what is new with your repository. The recommendation is to link to your `CHANGELOG.md` for automated updates, or you can custom manage a Markdown file with more tailored updates.

## How do I install it?

Install the dependency:

``` sh
yarn add -D @storybook-addon-whats-new
```

### Storybook 5.3 and newer

Then add it to your `.storybook/main.js`

``` js
module.exports = {
  // other configs here
  addons: ['storybook-addon-whats-new']
}
```

### Storybook <=5.2

Edit or create a file called `addons.js` in the Storybook config directory (by default, it’s `.storybook`).
Add following content to it:

``` js
import 'storybook-addon-whats-new/register';
```

## Getting Started

### Local Configuration

To configure this addon, you must provide a `whatsNewSource` parameter with the location of your Markdown file to display:

``` js
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
```

### Global Configuration

If your want to show the What's New panel on every story you can configure it globally in `.storybook/preview.js` (`.storybook/config.js` for Storybook `<= 5.2`).
To configure this addon, you must provide a `whatsNewSource` parameter with the location of your Markdown file to display:

``` js
import { addParameters } from '@storybook/react'; // <- or your storybook framework
import WhatsNew from './WHATS_NEW.md';

addParameters({
  whatsNewSource: WhatsNew,
});
```
