/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useState } from 'react';

import { Content, Header, Page } from '@backstage/core-components';
import {
  FieldExtensionOptions,
  FormProps,
  type LayoutOptions,
} from '@backstage/plugin-scaffolder-react';
import { useRouteRef } from '@backstage/core-plugin-api';

import { rootRouteRef } from '../../routes';
import {
  createExampleTemplate,
  TemplateDirectoryAccess,
  WebFileSystemAccess,
} from '../../lib/filesystem';

import { TemplateEditor } from './TemplateEditor';
import { TemplateFormPreviewer } from './TemplateFormPreviewer';
import { TemplateEditorIntro } from './TemplateEditorIntro';
import { CustomFieldExplorer } from './CustomFieldExplorer';

type Selection =
  | {
      type: 'local';
      directory: TemplateDirectoryAccess;
    }
  | {
      type: 'form';
    }
  | {
      type: 'field-explorer';
    }
  | {
      type: 'create-template';
      directory: TemplateDirectoryAccess;
    };

interface TemplateEditorPageProps {
  defaultPreviewTemplate?: string;
  customFieldExtensions?: FieldExtensionOptions<any, any>[];
  layouts?: LayoutOptions[];
  formProps?: FormProps;
}

export function TemplateEditorPage(props: TemplateEditorPageProps) {
  const [selection, setSelection] = useState<Selection>();
  const createLink = useRouteRef(rootRouteRef);

  let content: JSX.Element | null = null;
  if (selection?.type === 'local') {
    content = (
      <TemplateEditor
        directory={selection.directory}
        fieldExtensions={props.customFieldExtensions}
        onClose={() => setSelection(undefined)}
        layouts={props.layouts}
        formProps={props.formProps}
        customFieldExtensions={props.customFieldExtensions}
      />
    );
  } else if (selection?.type === 'form') {
    content = (
      <TemplateFormPreviewer
        defaultPreviewTemplate={props.defaultPreviewTemplate}
        customFieldExtensions={props.customFieldExtensions}
        onClose={() => setSelection(undefined)}
        layouts={props.layouts}
        formProps={props.formProps}
      />
    );
  } else if (selection?.type === 'field-explorer') {
    content = (
      <CustomFieldExplorer
        customFieldExtensions={props.customFieldExtensions}
        onClose={() => setSelection(undefined)}
      />
    );
  } else if (selection?.type === 'create-template') {
    content = (
      <TemplateEditor
        directory={selection.directory}
        fieldExtensions={props.customFieldExtensions}
        onClose={() => setSelection(undefined)}
        layouts={props.layouts}
        formProps={props.formProps}
        customFieldExtensions={props.customFieldExtensions}
      />
    );
  } else {
    content = (
      <Content>
        <TemplateEditorIntro
          onSelect={option => {
            if (option === 'local') {
              WebFileSystemAccess.requestDirectoryAccess()
                .then(directory => setSelection({ type: 'local', directory }))
                .catch(() => {});
            } else if (option === 'form') {
              setSelection({ type: 'form' });
            } else if (option === 'field-explorer') {
              setSelection({ type: 'field-explorer' });
            } else if (option === 'create-template') {
              WebFileSystemAccess.requestDirectoryAccess().then(directory =>
                createExampleTemplate(directory)
                  .then(() => {
                    // TODO: Fix this race. It is what it is.
                    setTimeout(() => {
                      setSelection({ type: 'create-template', directory });
                    }, 1);
                  })
                  .catch(() => {}),
              );
            }
          }}
        />
      </Content>
    );
  }

  return (
    <Page themeId="home">
      <Header
        title="Manage Templates"
        type="Create Components"
        typeLink={createLink()}
      />
      {content}
    </Page>
  );
}
