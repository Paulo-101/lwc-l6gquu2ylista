import { LightningElement } from "lwc";

export default class App extends LightningElement {
  columns = [
    {label: 'cod', fieldName:  'cod'},
    {label: 'Empresa', fieldName: 'Empresa'},
    {label: 'setor', fieldName:  'setor'},
    {label: 'valor', fieldName:  'valor'}
  ];

  //(cod, nome da despesa, setor e valor)
 


  listaEmpresa = [
    {cod:1, Empresa: 'Mamaco Corp', setor: 'Tecnologia', valor: '280000'},
    {cod:2, Empresa: 'Gorilla Corp', setor: 'Industria', valor: '280000'},
    {cod:3, Empresa: 'Godzilla Corp', setor: 'Tecnologia', valor: '280000'},
    {cod:5, Empresa: 'Corp Mamaco', setor: 'Petrolífera', valor: '280000'},
    {cod:6, Empresa: 'Chimpanzé Corp', setor: 'Tecnologia', valor: '280000'},
    {cod:7, Empresa: 'Caramelo Corp', setor: 'Tecnologia', valor: '280000'},
    {cod:8, Empresa: 'Pão quentinho Padoca', setor: 'Bancária', valor: '280000'},
    {cod:9, Empresa: 'YYZ Corp', setor: 'Tecnologia', valor: '280000'},
    {cod:10, Empresa: 'Babuíno Company', setor: 'Tecnologia', valor: '280000'},
    {cod:11, Empresa: 'Chinelo de mãe Ltda', setor: 'Tecnologia', valor: '280000'},
    {cod:12, Empresa: 'Marvel Industries', setor: 'Tecnologia', valor: '280000'},
    {cod:13, Empresa: 'Oscorp', setor: 'Tecnologia', valor: '280000'},
    {cod:14, Empresa: 'Kong', setor: 'Tecnologia', valor: '280000'},
  {cod:15, Empresa: 'Mamaco Corp', setor: 'Tecnologia', valor: '280000'},
 
  ]
}