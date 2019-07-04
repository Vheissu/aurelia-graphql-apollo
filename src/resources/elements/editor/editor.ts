import { customElement, inject, bindable, bindingMode } from 'aurelia-framework';
import './editor.css';

import EditorPlugin from 'tui-editor';

@customElement('editor')
@inject(Element)
export class Editor {
  element;
  editor;
  editorReference: HTMLDivElement;

  @bindable({ defaultBindingMode: bindingMode.twoWay }) value = '';
  @bindable() initialEditType = 'markdown';
  @bindable() previewStyle = 'none';
  @bindable() height = '500px;';

  @bindable() toolbarItems = [
    'heading',
    'bold',
    'italic'
  ];

  @bindable() updated = (data) => {};

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.editor = new EditorPlugin({
      el: this.editorReference,
      initialEditType: this.initialEditType,
      previewStyle: this.previewStyle,
      height: this.height,
      initialValue: this.value,
      usageStatistics: false,
      hideModeSwitch: true,
      toolbarItems: this.toolbarItems,
      events: {
        change: () => {
          const markdown = this.editor.getMarkdown();
          const html = this.editor.getHtml();

          this.value = html;

          this.updated({ markdown, html });
        }
      }
    } as any);
  }
}
