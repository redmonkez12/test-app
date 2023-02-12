import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
    className: string;
    children: ReactNode;
}

export function GlassPane({ children, className }: Props) {
    return (
        <div className={clsx("rounded-2xl border-solid border-2 border-gray-200", className)}>{
            children
        }</div>
    );
}