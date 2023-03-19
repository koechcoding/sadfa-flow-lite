import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { SingleCompanyComponent } from './single-org/single-org.component';
import { Company } from 'src/app/interfaces/org.interface';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, SingleCompanyComponent],
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.store.select('companies').subscribe(({ companies, loading, error }) => {
      this.companies = companies;
      console.log(this.companies);
    });
  }
  

}
