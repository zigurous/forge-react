import type { Meta, StoryObj } from '@storybook/react';
import CodeBlock from '../src/components/CodeBlock';

const meta: Meta<typeof CodeBlock> = {
  component: CodeBlock,
};

export default meta;

type Story = StoryObj<typeof CodeBlock>;

export const Block: Story = {
  args: {
    children: `type Result = "pass" | "fail"

function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
}
`,
    language: 'javascript',
    showCopyButton: true,
  },
};

export const Inline: Story = {
  args: {
    inline: true,
    children: 'console.log("Hello, World!")',
    language: 'javascript',
  },
};
