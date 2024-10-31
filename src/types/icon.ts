export type IconElement = string | SVGIcon | React.ReactElement;
export type SVGIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
export type SVGIconSet = { [key: string]: SVGIcon };
