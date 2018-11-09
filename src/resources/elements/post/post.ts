import { bindable, customElement } from 'aurelia-framework';

@customElement('post')
export class Post {
    @bindable data = {};
}
