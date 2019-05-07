import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import { youtubeReg, vimeoReg } from '../../../constants/urls';
import { createEditorMenuItem } from '../../../lib/editor';

interface IParams {
  type: string;
  url: any;
}

type MockMenuItem = 'movie';

type SelectMockMenu = MockMenuItem[];

interface IMockInsertMenu {
  [key: string]: InsertMenuCustomItem;
}

const mockInsertMenu: IMockInsertMenu = {
  movie: createEditorMenuItem({
    content: 'Movie extension',
    onClick: editorActions => {
      const url = prompt('Input Url') || '';
      const youtubeMatch = url.match(youtubeReg);
      const vimeoMatch = url.match(vimeoReg);
      const newParameters: IParams = {} as IParams;

      if (youtubeMatch && youtubeMatch[2].length === 11) {
        newParameters.type = 'youtube';
        newParameters.url = youtubeMatch;
      } else if (vimeoMatch && url[1]) {
        newParameters.type = 'vimeo';
        newParameters.url = vimeoMatch;
      } else {
        return null;
      }

      editorActions.replaceSelection({
        type: 'extension',
        attrs: {
          extensionType: 'com.haniplanet.macro.core',
          extensionKey: 'movie',
          text: 'Movie extension',
          parameters: newParameters,
        },
      });
    },
  }),
};

const selectMockMenu = (menu: SelectMockMenu): InsertMenuCustomItem[] =>
  menu.map(menuItem => mockInsertMenu[menuItem]);

export default selectMockMenu;
