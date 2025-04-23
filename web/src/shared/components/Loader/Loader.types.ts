export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'gray';
  className?: string;
}

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
  animate?: boolean;
  count?: number;
  type?: 'line' | 'circle' | 'rect';
}
