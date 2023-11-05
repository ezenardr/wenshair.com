import Link from 'next/link';
import Style from './buttons.module.scss';

type Props = {
    children: React.ReactNode;
    path: string;
};
export function ButtonPrimary({ children, path }: Props) {
    return (
        <Link href={path} className={Style.ctaPrimary}>
            {children}
        </Link>
    );
}
export function ButtonSecondary({ children, path }: Props) {
    return (
        <Link href={path} className={Style.ctaSecondary}>
            {children}
        </Link>
    );
}
