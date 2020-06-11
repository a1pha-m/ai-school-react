import React from 'react';

export const NotebookTile = ({notebook}) => {
    return (<button className={'btn white black-text'}>{notebook.name}</button>);
};
