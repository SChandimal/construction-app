import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $('.basic.test.modal')
      .modal('setting', 'closable', false)
      .modal('show')
    ;
  }

}
