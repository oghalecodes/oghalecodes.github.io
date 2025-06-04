export interface Tool {
  image: string;
  label: string;
  category?: string;
  alt?: string;
}

export const getTools = (): Tool[] => [
  {
    image: '/images/tech-icons/csharp.svg',
    label: 'C#',
    category: 'Backend',
    alt: 'C# programming language'
  },
  {
    image: '/images/tech-icons/dotnet.svg',
    label: '.NET Core',
    category: 'Backend',
    alt: '.NET Core framework'
  },
  {
    image: '/images/tech-icons/nodejs.svg',
    label: 'Node.js',
    category: 'Backend',
    alt: 'Node.js runtime'
  },
  {
    image: '/images/tech-icons/react.svg',
    label: 'React',
    category: 'Frontend',
    alt: 'React JavaScript library'
  },
  {
    image: '/images/tech-icons/angular.svg',
    label: 'Angular',
    category: 'Frontend',
    alt: 'Angular framework'
  },
  {
    image: '/images/tech-icons/azure.svg',
    label: 'Azure',
    category: 'Cloud',
    alt: 'Microsoft Azure cloud platform'
  },
  {
    image: '/images/tech-icons/aws.svg',
    label: 'AWS',
    category: 'Cloud',
    alt: 'Amazon Web Services'
  },
  {
    image: '/images/tech-icons/kubernetes.svg',
    label: 'Kubernetes',
    category: 'DevOps',
    alt: 'Kubernetes container orchestration'
  },
  {
    image: '/images/tech-icons/terraform.svg',
    label: 'Terraform',
    category: 'DevOps',
    alt: 'Terraform infrastructure as code'
  },
  {
    image: '/images/tech-icons/git.svg',
    label: 'GitOps',
    category: 'DevOps',
    alt: 'Git version control and GitOps'
  }
];

// Alternative function to get specific tool by label
export const getTool = (label: string): Tool | undefined => {
  return getTools().find(tool => tool.label.toLowerCase() === label.toLowerCase());
}

// Function to get tools as simple objects (for components that don't need icons)
export const getToolsData = () => {
  return getTools().map(({ label }) => ({
    label
  }));
}