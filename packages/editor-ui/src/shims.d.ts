import Vue, { VNode } from 'vue';

declare module 'markdown-it-link-attributes';
declare module 'markdown-it-emoji';
declare module 'markdown-it-task-lists';

declare global {
	namespace JSX {
		// tslint:disable no-empty-interface
		interface Element extends VNode {}
		// tslint:disable no-empty-interface
		interface ElementClass extends Vue {}
		interface IntrinsicElements {
			[elem: string]: any;
		}
	}
}
