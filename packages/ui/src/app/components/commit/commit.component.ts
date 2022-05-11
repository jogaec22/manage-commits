import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {

  @Input() commit: any;
  public toggleCollapseCommit: boolean = false;

  constructor() {    
  }

  ngOnInit(): void {    
  }

  collapseCommit(){
    this.toggleCollapseCommit = !this.toggleCollapseCommit;
  }

}
