import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CommitsService } from 'src/app/services/commits.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  commitsData$!: Observable<any>;

  constructor(
    private commitsService: CommitsService
  ) { }

  ngOnInit(): void {
    this.getCommitsData();
  }

  public getCommitsData(){
    this.commitsData$ = this.commitsService.getByOwnerAndRepo('jogaec22','manage-commits').pipe(
      tap( data => console.log(data))
    )
  }

}
