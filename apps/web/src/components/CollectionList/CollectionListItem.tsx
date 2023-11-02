import {Collection} from "@/types/collection.types.ts";
import {clsx} from "clsx";
import {CollectionListItemProps} from "./collectionList.types.ts";
import {Icon} from "@iconify/react";
import {Card, Heading, Text} from "@linkmaster/uikit";

const getBorderColor = (color: Collection['color']) => {
  let borderColor = '';

  switch(color) {
    case 'indigo':
      borderColor = 'border-indigo-200 hover:border-indigo-300';
      break;
    case 'pink':
      borderColor = 'border-pink-200 hover:border-pink-300';
      break;
    case 'red':
      borderColor = 'border-red-200 hover:border-red-300';
      break;
    case 'blue':
      borderColor = 'border-blue-200 hover:border-blue-300';
      break;
    case 'emerald':
      borderColor = 'border-emerald-200 hover:border-emerald-300';
      break;
    case 'orange':
      borderColor = 'border-orange-200 hover:border-orange-300';
      break;
    case 'rose':
      borderColor = 'border-rose-200 hover:border-rose-300';
      break;
    default:
      borderColor = 'border-zinc-100 hover:border-zinc-300';
  }

  return borderColor;
};

export const CollectionListItem = ({name, icon, color, description}: CollectionListItemProps) => {
  return (
    <Card className={clsx(getBorderColor(color), 'select-none', 'cursor-pointer', 'transition-colors')}>
      <div className="flex gap-2 items-center">
        {icon && <Icon fontSize={24} icon={icon} />}
        <Heading>{name}</Heading>
      </div>
      <Text className="mt-2">
        {description}
      </Text>
    </Card>
  );
};
