import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MedicineProvider } from 'src/app/provider/medicine.provider';
import { IMedicine } from 'src/app/model/medicine-model';

@Component({
  selector: 'app-medicine-dashboard',
  templateUrl: './medicine-dashboard.component.html',
  styleUrls: ['./medicine-dashboard.component.css']
})


export class MedicineDashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'brand', 'price', 'quantity', 'expiry', 'notes'];
  medList: IMedicine[];
  dataSource = new MatTableDataSource(this.medList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public medicineProvider: MedicineProvider) {
  }

  ngOnInit(): void {
    this.medicineProvider.medicineListObservable.subscribe(list => {
      if (list) {
        this.medList = list;
        this.dataSource = new MatTableDataSource(this.medList);
      }
    })
  }

}