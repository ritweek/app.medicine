;import { Injectable } from "@angular/core";
import { MedicineService } from '../service/medicine.service';
import { IMedicine } from '../model/medicine-model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MedicineProvider{

    medicineList: IMedicine[] = [];
    medicine: IMedicine = {} as IMedicine
    medicineListSubject = new BehaviorSubject([]);
    medicineListObservable = this.medicineListSubject.asObservable()

    constructor(private medicineService: MedicineService, private router: Router){
        this.getMedicine();
    }

    getMedicine(){
        this.medicineService.getMedicine().subscribe(result=>{
            if(result){
                this.medicineList = result;
                this.medicineListSubject.next(this.medicineList);
            }
        })
    }

    setName(name: any){
        this.medicine.name = name.target.value;
    }

    setBrand(brand:any){
        this.medicine.brand = brand.target.value;
    }

    setPrice(price:any){
        this.medicine.price = price.target.value;
    }

    setQuantity(quantity:any){
        this.medicine.quantity = quantity.target.value;
    }

    setNote(note:any){
        this.medicine.notes = note.target.value;
    }

    setDate(date: any){
        this.medicine.expiry = date.target.value;
    }

    addMedicine(){
        this.medicineList.push(this.medicine);
        this.medicineListSubject.next(this.medicineList);
        this.medicine = {} as IMedicine;
        this.router.navigate(['/dashboard']);
    }
}