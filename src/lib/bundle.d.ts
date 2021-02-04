/// <reference types="react" />
declare module "Button/Button" {
    import * as React from 'react';
    export type Props = {
        children: React.ReactNode;
        onClick?: () => void;
        type?: string;
        disabled?: boolean;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>;
    export const Button: React.FC<Props>;
}
declare module "Button/index" {
    export * from "Button/Button";
}
declare module "index" {
    export * from "Button/index";
}
//# sourceMappingURL=bundle.d.ts.map