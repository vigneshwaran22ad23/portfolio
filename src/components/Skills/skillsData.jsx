import {
  FaPython, FaDatabase, FaChartBar, FaTools, FaUsers, FaRobot, FaLayerGroup,
} from 'react-icons/fa'

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaPython />,
    skills: [
      { name: 'Python', pct: 90 },
      { name: 'SQL', pct: 90 },
      { name: 'Advanced Excel', pct: 85 },
    ],
  },
  {
    title: 'Data Analytics',
    icon: <FaChartBar />,
    skills: [
      { name: 'Excel', pct: 95 },
      { name: 'Power BI', pct: 95 },
      { name: 'Tableau', pct: 80 },
      { name: 'Data Visualization', pct: 92 },
    ],
  },
  {
    title: 'Machine Learning',
    icon: <FaRobot />,
    skills: [
      { name: 'Scikit-learn', pct: 90 },
      { name: 'Regression & Classification', pct: 88 },
      { name: 'Feature Engineering', pct: 85 },
      { name: 'Model Evaluation', pct: 87 },
    ],
  },
  {
    title: 'Deep Learning',
    icon: <FaLayerGroup />,
    skills: [
      { name: 'TensorFlow', pct: 78 },
      { name: 'Neural Networks', pct: 75 },
      { name: 'Computer Vision', pct: 70 },
      { name: 'NLP Basics', pct: 68 },
    ],
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    skills: [
      { name: 'MySQL', pct: 88 },
      { name: 'PostgreSQL', pct: 80 },
      { name: 'MongoDB', pct: 70 },
      { name: 'Data Warehousing', pct: 72 },
    ],
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    skills: [
      { name: 'Jupyter Notebook', pct: 92 },
      { name: 'Git & GitHub', pct: 85 },
      { name: 'VS Code', pct: 90 },
      { name: 'Power Query / DAX', pct: 88 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: <FaUsers />,
    skills: [
      { name: 'Problem Solving', pct: 92 },
      { name: 'Communication', pct: 88 },
      { name: 'Team Collaboration', pct: 90 },
      { name: 'Time Management', pct: 85 },
    ],
  },
]
