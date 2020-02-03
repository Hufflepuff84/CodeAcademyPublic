import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { IBeer } from '../ibeer';
import { MatSort } from '@angular/material/sort';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'tagline',
    'image_url',
    'abv',
  ];

  dataSource: MatTableDataSource<IBeer>;
  @ViewChild(MatSort, {static: true})sort: MatSort;
  count = 25;
  constructor(private dataService: DataService) { }

  async ngOnInit() {
    const data = await this.dataService.getBeers();

    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;

  }

  async getNewBeer() {
    this.dataSource = new MatTableDataSource(await this.dataService.getBeersByCount(this.count++));
    this.dataSource.sort = this.sort;
  }

}
