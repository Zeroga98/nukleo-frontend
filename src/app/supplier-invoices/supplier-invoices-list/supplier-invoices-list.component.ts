import { Component, OnInit } from '@angular/core';
import { StorageService } from 'app/shared/storage.service';
import { NgForm } from '@angular/forms';

declare var $: any;
declare var jQuery: any;
declare var swal: any;

@Component({
  selector: 'app-supplier-invoices-list',
  templateUrl: './supplier-invoices-list.component.html',
  styleUrls: ['./supplier-invoices-list.component.css']
})
export class SupplierInvoicesListComponent implements OnInit {

  constructor(private storageService: StorageService) { }
  
  sources = [ 'Todos','Punto de Venta','Oficina' ];
  selectFiltersOptions = [ 'Todos','Si','No' ];
  initialDateSelected = '';
  finalDateSelected = '';
  sourceSelected = '';
  suppliesSelected = '';
  pettyCashSelected = '';
  immediateRegistrationSelected='';
  billSelected = '';
  supplierSelected = '';
  businessSelected = '';
  radioDateType='movement';
  dataTableSearch = [];
  totalTableSearch = 0;
  
  allSupplies:any;
  selectedSupplieModal:any;
  selectedSupplierForModal:any;
 
  
  ngOnInit() {

    $('#tableEdit').editableTableWidget();

    $('.source-select').select2({
      data:this.sources
    }).on('select2:select', e => this.sourceSelected = e.target.value);

    $('.supplies-select').select2({
      data:this.selectFiltersOptions
    }).on('select2:select', e => this.suppliesSelected = e.target.value);

    $('.petty-cash-select').select2({
      data:this.selectFiltersOptions
    }).on('select2:select', e => this.pettyCashSelected = e.target.value);

    $('.immediate-registration-select').select2({
      data:this.selectFiltersOptions
    }).on('select2:select', e => this.immediateRegistrationSelected = e.target.value);

    $('.bill-select').select2({
      data:this.selectFiltersOptions
    }).on('select2:select', e => this.billSelected = e.target.value);


    $("#initialDate").datetimepicker({
      widgetPositioning: {
        horizontal: 'left'
      },
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down",
        previous: 'fa fa-arrow-left',
        next: 'fa fa-arrow-right'
      },
      format: 'LL'
    }).on('dp.change', e => this.initialDateSelected = e.target.value);

    $("#finalDate").datetimepicker({
      widgetPositioning: {
        horizontal: 'left'
      },
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down",
        previous: 'fa fa-arrow-left',
        next: 'fa fa-arrow-right'
      },
      format: 'LL'
    }).on('dp.change', e => this.finalDateSelected = e.target.value);


    

    this.onSuppliers();
    this.onBusiness();
    this.onSupplies();

  }
 

  

  onSuppliers(){
      this.storageService.getSuppliers('')
      .subscribe(
        (data => {
          this.supplierSelected = data[0].id;
          $('#suppliers').select2({
            data: data
          }).on('select2:select', e => this.supplierSelected = e.target.value);
        }),
        (error: any) =>{
          console.log(error);
        }
      );
  }

  onBusiness(){
    this.storageService.getBusiness('')
    .subscribe(
      (data => {
        this.businessSelected = data[0].id;
        $('#business').select2({
          data: data
        }).on('select2:select', e => this.businessSelected = e.target.value);  

      }),
      (error: any) =>{
        console.log(error);
      }
    );
  }

  onSupplies(){
    
    const body = {  
      "codigo":"",
      "cuenta_hijo_id":0,
      "familia_id":0,
      "nombre":"",
      "presentacion_id":0,
      "unidad_medida":""
   };

    this.storageService.getSupplies(body)
    .subscribe(
      (data => {
        
        this.allSupplies = data;

      }),
      (error: any) =>{
        console.log(error);
      }
    );
  }



  setRadioDateType(value){
    this.radioDateType=value;
  }

  setSelectedSupplierForModal(value){
    this.selectedSupplierForModal=value;
  }

  validateDate():boolean{
    
    if(this.initialDateSelected ==='' || this.finalDateSelected ===''){
      return false;
    }else{
      if(Date.parse(this.finalDateSelected) < Date.parse(this.initialDateSelected)){
        return false;
      }
    }

    return true;
  }

  onSearchSupplierInvoices(){


    if(!this.validateDate()){
      swal({
        title: "Error!",
        text: "Por Favor Ingrese Una Fecha Valida!",
        type: "warning",
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Ok"
      });
      return;
    }
    
    const payload ={  
      "usuarioid":0, //agregar Id de local storage una vez implementado login
      "proveedorid":this.supplierSelected,
      "negocioid":this.businessSelected,
      "mov_start_date":this.initialDateSelected,
      "mov_end_date":this.finalDateSelected,
      "doc_start_date":this.initialDateSelected,
      "doc_end_date":this.finalDateSelected,
      "estatus":'',
      "num_documento":"",
      "es_factura":  this.billSelected ==='No' ? false : this.billSelected ==='Si'? true: null,
      "es_reg_inmediato":this.immediateRegistrationSelected ==='No' ? false : this.immediateRegistrationSelected ==='Si'? true: null,
      "es_caja_chica":this.pettyCashSelected ==='No' ? false : this.pettyCashSelected ==='Si'? true: null,
      "es_insumo":this.suppliesSelected ==='No' ? false : this.suppliesSelected ==='Si'? true: null,
      "factura":this.billSelected ==='' ||  this.billSelected ==='Todos' ? false : true,
      "reg_inmediato":this.immediateRegistrationSelected ==='' ||  this.billSelected ==='Todos' ? false : true,
      "caja_chica":this.pettyCashSelected  ==='' ||  this.billSelected ==='Todos' ? false : true,
      "insumo":this.suppliesSelected  ==='' ||  this.billSelected ==='Todos' ? false : true,
      "source": this.sourceSelected.toUpperCase(),
      "isMov":this.radioDateType ==='movement' ? true : false,
      "isDoc":this.radioDateType ==='document' ? true : false,
   };
    this.storageService.searchSupplierInvoices(payload)
    .subscribe(
      (data: any) =>{
        console.log(data);
        this.dataTableSearch = data;
        
        if(this.dataTableSearch.length>0){

          if(this.dataTableSearch.length>1){
            this.totalTableSearch = this.dataTableSearch.reduce((a, b)=>{ return a.Total + b.Total;});
          }else{
            this.totalTableSearch = data[0].Total;
          }

        }
        
      },
      (error: any) =>{
        console.log(error);
      }
    );
  }

  undoInvoice(value){
    console.log(value);
    swal({
      title: '¿Esta seguro que desea DESHACER la Factura Proveedor Punto de Venta #:'+value.ID+'?',
      text: "No se podrá recuperar la informacion!",
      type: "warning",
      showCancelButton: true,
      cancelButtonClass: "btn-default",
      confirmButtonClass: "btn-danger",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si,deshacer",
      closeOnConfirm: false
    },
    ()=>{
      this.storageService.undoOcs(value.ID)
      .subscribe(
        (data: any) =>{
          console.log(data);

          const textAlert = 
          `
          Los Siguientes Datos Han Sido Removidos del Sistema:

          Total FPPV: `+ (data.oc_total ==''?'0.00':data.oc_total) +`
          Total Gastos: `+ (data.gastos ==''?'0.00':data.gastos) +`
          Total Pagos: `+ (data.pagos ==''?'0.00':data.pagos )+`

          `;
          
          swal({
            title: textAlert,
          
            type: "success",
            confirmButtonClass: "btn-success",
            confirmButtonText:'Ok'
          });

          this.onSearchSupplierInvoices();
          
        },
        (error: any) =>{
          console.log(error);
        }

      );
      

      
    });
    
  }

  

  submit(){
    console.log(this.radioDateType);
    console.log(this.initialDateSelected );
    console.log(this.finalDateSelected );
    console.log(this.sourceSelected) ;
    console.log(this.suppliesSelected) ;
    console.log(this.pettyCashSelected) ;
    console.log(this.immediateRegistrationSelected);
    console.log(this.billSelected) ;
    console.log(this.supplierSelected);
    console.log(this.businessSelected);
    console.log(this.selectedSupplieModal);
    console.log(this.selectedSupplierForModal);
    console.log(this.validateDate());
  }

}
