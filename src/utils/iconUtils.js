import * as Icons from 'lucide-react';

export default function getIcon(iconName) {
  return Icons[iconName] || Icons.Smile;
};