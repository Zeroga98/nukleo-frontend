import { Component, OnInit } from '@angular/core';
import { StorageService } from 'app/shared/storage.service';

declare var swal: any;
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-fix-supplier-invoices',
  templateUrl: './fix-supplier-invoices.component.html',
  styleUrls: ['./fix-supplier-invoices.component.css']
})
export class FixSupplierInvoicesComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    
    $(function(){

      $('.select2-tags').select2({
        tags: true,
        tokenSeparators: [',', ' '],
        placeholder: "Ingrese Codigo",
        allowClear: true
      })
      // .on("change", function (e) { 

      //   const selectdata = $('.select2-tags').val();
      //   console.log(selectdata)
      // });


    })
  }

  onFix(){
    const selectData = $('.select2-tags').val();
    if(selectData.length <=0){
      swal('Error!!', 'Error Ingrese Codigo', 'error');
      return;
    }
    const codes = {ids:selectData.join(", ")};
    this.storageService.liquidateSupplierInvoices(codes)
    .subscribe(
      (response: Response) => {
        console.log(response);
        swal('Exito!!', 'Fix Aplicado con Exito!', 'success');
        $('.select2-tags').empty();
      },
      (error: any) =>{
        console.log(error);
      }
    );
  }

 

}
