import * as React from 'react';
import { EditorActions } from '@atlaskit/editor-core';
import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import { ICustomButtom } from '../../../types/editor';
interface IRenderEditor {
    fileUploadMenuItem: InsertMenuCustomItem;
    imageUploadMenuItem: InsertMenuCustomItem;
    customButton: InsertMenuCustomItem[];
}
interface IMenuDrawerProps {
    isImageUpload: boolean;
    renderEditor: (params: IRenderEditor) => React.ReactNode;
    customButton?: ICustomButtom[];
    customActionButton?: (actions: EditorActions) => React.ReactElement[];
}
declare const MenuDrawer: React.FC<IMenuDrawerProps>;
export default MenuDrawer;