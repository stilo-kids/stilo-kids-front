import { type VariantProps, cva } from 'class-variance-authority';
import { Text, View, TouchableOpacity } from 'react-native';

import { cn } from '../app/lib/utils';

const buttonVariants = cva(
  'items-center justify-center w-auto py-[10] px-[20] rounded-[10]',
  {
    variants: {
      variant: {
        default: 'bg-blue',
        orange: 'bg-orange',
        pink: 'bg-pink',
        green: 'bg-green',
        gray: 'bg-gray',
        white: 'bg-white',
        black: 'bg-black',
        iconbutton: 'px[3] py[1] rounded-[8]',
        addButtonWhite: 'flex-row justify-between py-[10] px-[20]',
        addButtonBlack: 'flex-row justify-between py-[10] px-[20]',
        cardButton: 'p-0 flex-col',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-8 px-2',
        lg: 'h-12 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva('text-center font-bold', {
  variants: {
    variant: {
      default: 'text-white',
      orange: 'text-white',
      pink: 'text-white',
      green: 'text-white',
      gray: 'text-white',
      white: 'text-black',
      black: 'text-white',
      iconbutton: 'none',
      addButtonWhite: 'text-white',
      addButtonBlack: 'text-black',
      cardButton: 'text-black',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label?: string;
  labelClasses?: string;
  icon?: () => React.JSX.Element;
  children?: React.ReactNode;
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size}), className )}
      {...props}
    >
      {variant !== 'cardButton' && (
        <Text
          className={cn(
            buttonTextVariants({ variant, size }), 
            labelClasses
          )}
        >
          {label}
        </Text>
      )}
      {icon?.()}
      {children}
    </TouchableOpacity>
  );
}

export { Button, buttonVariants, buttonTextVariants };
