import tw from 'twrnc';
import { Text, View } from 'react-native';

import { cn } from '../app/lib/utils';

function Card({
  style,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      style={[style, tw`bg-white rounded-[2] px-6 py-6 border w-80 shadow-md`]}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View style={tw`p-4 ${className || ''}`} {...props} />;
}

function CardTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Text>) {
  return (
    <Text
      style={tw`text-2xl font-semibold tracking-tight text-primary ${className || ''}`}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Text>) {
  return (
    <Text
      style={tw`text-sm text-muted-foreground ${className || ''}`}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View style={tw`p-4 pt-0 ${className || ''}`} {...props} />;
}

// TODO: style
function CardFooter({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      style={tw`flex flex-row items-center p-4 pt-0 ${className || ''}`}
      {...props}
    />
  );
}

interface SimpleCardProps {
  className?: string;
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
}
function SimpleCard({
  className,
  title,
  description,
  content,
  footer,
}: SimpleCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        {title && (
          <Text style={tw`text-2xl font-semibold tracking-tight text-primary`}>
            {title}
          </Text>
        )}
        {description && (
          <Text style={tw`text-sm text-muted-foreground`}>{description}</Text>
        )}
      </CardHeader>
      {content && (
        <CardContent>
          <Text style={tw`text-base text-primary`}>{content}</Text>
        </CardContent>
      )}
      {footer && (
        <CardFooter>
          <Text style={tw`text-sm text-muted-foreground`}>{footer}</Text>
        </CardFooter>
      )}
    </Card>
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  SimpleCard,
};
