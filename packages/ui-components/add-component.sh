#!/bin/bash

# Check if the component name is provided
if [ -z "$1" ]; then
  echo "Please specify the component name!"
  exit 1
fi

# Capitalize the first letter of the component name
COMPONENT_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${1:0:1})${1:1}"

# Install the component
pnpm dlx shadcn@latest add $1

# Create a folder for the component
mkdir -p src/lib/$1

# Move the component to the appropriate folder
mv src/lib/$1.tsx src/lib/$1/$1.tsx

# Create the [componentName].stories.ts file
cat <<EOL > src/lib/$1/$1.stories.ts
import { Meta, StoryObj } from '@storybook/react';
import { $COMPONENT_NAME } from './$1';

const meta: Meta<typeof $COMPONENT_NAME> = {
  title: 'Example/$COMPONENT_NAME',
  component: $COMPONENT_NAME,
};

export default meta;
type Story = StoryObj<typeof $COMPONENT_NAME>;

export const Primary: Story = {
  args: {
    primary: true,
    label: '$COMPONENT_NAME',
  },
};
EOL

echo "Component $1 created in src/lib/$1 with the file $1.stories.ts"