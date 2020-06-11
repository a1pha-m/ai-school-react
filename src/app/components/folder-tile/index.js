import React from 'react';

export const FolderTile = ({folder}) => {
    return (<button className={'btn white black-text'}>{folder.name}</button>);
};
