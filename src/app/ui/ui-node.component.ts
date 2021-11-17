import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { makeRandomString } from '../shared/shared';
import { NodeModel } from './node.model';

@Component({
    selector: 'ui-node',
    templateUrl: 'ui-node.component.html'
})
export class UiNodeComponent implements OnInit {
    @Input('node') node: NodeModel = { type: 'unset', id: makeRandomString(10)};
    @Input('editing') editing: boolean;
    @Output('remove') removeEvent: EventEmitter<NodeModel> = new EventEmitter<NodeModel>(null);

    mouseover: boolean;

    tempFileName: string;

    get fileTypeDefined() {
        if (this.node.type == 'file' || this.node.type == 'folder') {
            return true;
        } else {
            return false;
        }
    }

    addNode() {
        if (!this.node.children) {
            this.node.children = [];
        }

        this.node.children.push({
            type: 'unset',
            name: null,
            id: makeRandomString(10),
            children: []
        });
    }

    removeNode() {
        this.removeEvent.emit(this.node);
    }

    removeChildNode(index: number) {
        this.node.children.splice(index, 1);
    }

    applyNameChange() {
        this.node.name = this.tempFileName;
        this.editing = false;
    }

    cancelNameChange() {
        this.tempFileName = this.node.name;
        this.editing = false;
        this.removeNode();
    }
    
    constructor() { }

    ngOnInit() { 
        this.tempFileName = this.node.name;
    }
}