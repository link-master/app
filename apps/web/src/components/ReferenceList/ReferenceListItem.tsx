import {clsx} from "clsx";
import {MouseEventHandler} from "react";
import {ReferenceListItemProps} from "./referenceList.types.ts";
import {Card, Link as UILink, Heading, Text} from "@linkmaster/uikit";
import {Link} from 'react-router-dom';

export const ReferenceListItem = ({name, url, collection}: ReferenceListItemProps) => {
  const onClickEvent: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
  };

  return (
    <Link to={url} target="_blank">
      <Card className={clsx('select-none', 'cursor-pointer', 'transition-colors', 'hover:border-neutral-300')}>
        <div className="flex gap-2 items-center">
          <Heading>{name}</Heading>
        </div>
        <UILink onClick={onClickEvent} size="small" href={url}>{url}</UILink>
      </Card>
    </Link>
  );
};
