import { Component, OnInit } from '@angular/core';
import { makeRandomString } from '../shared/shared';
import { NodeModel } from './node.model';

const MAX_JSON_LEVEL = 5

@Component({
    selector: 'ui-file-tree',
    templateUrl: 'ui-file-tree.component.html'
})

export class UiFileTreeComponent implements OnInit {

    nodes: NodeModel[] = [];

    get jsonResult() {
        return JSON.stringify(this.nodes, null, MAX_JSON_LEVEL);
    }

    addNode() {
        this.nodes.push({
            type: 'unset',
            name: null,
            children: [],
            id: makeRandomString(10)
        });
    }

    removeNode(index: number) {
        this.nodes.splice(index, 1);
    }

    constructor() { }

    ngOnInit() { }
}