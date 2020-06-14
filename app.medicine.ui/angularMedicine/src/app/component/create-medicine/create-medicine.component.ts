import { Component, OnInit } from '@angular/core';
import { MedicineProvider } from 'src/app/provider/medicine.provider';
import { IMedicine } from 'src/app/model/medicine-model';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit {

  constructor(public medicineProvider: MedicineProvider) { }

  ngOnInit(): void { }


}
