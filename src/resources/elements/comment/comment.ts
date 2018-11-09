import { bindable, customElement } from 'aurelia-framework';

@customElement('comment')
export class Comment {
    @bindable data = {};
}
