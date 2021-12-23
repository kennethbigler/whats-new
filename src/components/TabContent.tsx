import React from "react";
import { styled } from "@storybook/theming";
import { Title, Description, Link } from "@storybook/components";

const TabWrapper = styled.div(({ theme }) => ({
  background: theme.background.content,
  padding: "4rem 20px",
  minHeight: "100vh",
  boxSizing: "border-box",
}));

const TabInner = styled.div({
  maxWidth: 768,
  marginLeft: "auto",
  marginRight: "auto",
});

interface TabContentProps {
  changelog: string;
}

export const TabContent: React.FC<TabContentProps> = ({ changelog }) => (
  <TabWrapper>
    <TabInner>
      <Title>What&apos;s New?</Title>
      {changelog
        ? <Description markdown={changelog} />
        : <h2>No Changelog Found</h2>
      }
    </TabInner>
  </TabWrapper>
);
