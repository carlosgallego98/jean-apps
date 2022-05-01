import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
  inner?: boolean;
  className?: string;
}

export function Card({ children, inner = false, className = '' }: CardProps) {
  return (
    <div className={`overflow-hidden transition rounded-sm px-2 md:px-4 py-3 md:py-3 duration-150 ease-in-out  ${className} ${styles['container']}`}>
      {children}
    </div>
  )
}

export default Card;
