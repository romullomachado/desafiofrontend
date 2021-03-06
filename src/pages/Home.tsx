import { FormEvent, useState } from 'react'
import axios from 'axios'

import localizaempresas from '../assets/images/localizaempresas.svg';

export function Home() {

  const [cnpj, setNewCnpj] = useState('')

  async function searchCompanyCNPJ(event: FormEvent) {
    event.preventDefault();

    let strCnpj = localStorage.getItem('cnpjStorage')
    let cnpjStorage: any[] = []
    let existsInLocalStorage = cnpjStorage.findIndex(cnpjStorage => cnpjStorage.JSON.account === strCnpj);
    let fantasia: string;

    if (strCnpj) 
    cnpjStorage = JSON.parse(strCnpj)
    
    axios
    .get("https://cors.bridged.cc/https://receitaws.com.br/v1/cnpj/"+cnpj)
    .then(response => {
      //Checar se ja existe o cnpj no storage
      //se existir, deve atualizar
      // se nao existir, deve inserir

      //Informações que preciso pegar da API
      // fantasia,
      // cnpj,
      // logradouro,
      // numero,
      // bairro,
      // município
      cnpjStorage.push(response.data)
      console.log(cnpjStorage)
      localStorage.setItem('cnpjStorage', JSON.stringify(cnpjStorage))

      fantasia = JSON.stringify(localStorage.getItem('fantasia'))
      console.log(fantasia)
      
        
      
    })
    .catch(error => {
        console.log(JSON.stringify(error))
    })

    
  }

  

  return(
    <div className="h-full w-full">
      <div className="flex flex-col">
        <div id="container-header" className="grid justify-center p-8"> 
          <div id="title-row" className="inline-flex pt-5 text-green-700"> 
              <i className="fas fa-building fa-4x pr-8"></i>
              <h1 className="text-6xl font-family-Roboto">Localizador de Empresas</h1>
          </div>
            <div id="search-row" className="p-16 justify-center inline-flex cnpj">
              <form onSubmit={searchCompanyCNPJ}>
                <input
                    type="text"  
                    placeholder="CNPJ..." 
                    className="rounded-lg outline-none text-xl border-3 border-green-600 p-2 px-4 
                    pr-32 h-16 placeholder-gray-400 form-control"
                    onChange={event => setNewCnpj(event.target.value)}                     
                    value={cnpj}> 
                </input>
                <button type="submit" className="ml-8 px-8 text-2xl rounded-full text-white bg-green-600">
                  LOCALIZAR
                </button>
              </form>  
            </div>
        </div>
        <div id="container-body" className="h-screen bg-gradient-to-r from-green-600 to-green-900">
         <div>
          <img src={localizaempresas} alt="Imagem localizar empresas"
                      className="bg-auto bg-no-repeat object-scale-down h-48 w-full flex mt-56" />
          <p className="text-center text-white text-xl">Localize acima a primeira empresa</p> 
         </div>
        </div>
      </div>      
    </div>
  )
}

function fantasia(arg0: string, fantasia: any) {
  throw new Error('Function not implemented.');
}
