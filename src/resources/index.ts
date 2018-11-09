import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./elements/comment/comment'),
        PLATFORM.moduleName('./elements/editor/editor'),
        PLATFORM.moduleName('./elements/post/post')
    ]);
}
