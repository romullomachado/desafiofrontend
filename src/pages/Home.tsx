import localizaempresas from '../assets/images/localizaempresas.svg';

export function Home() {
  return(
    <div className="h-full w-full">
      <div className="flex flex-col">
        <div id="container-header" className="grid justify-center p-8"> 
          <div id="title-row" className="inline-flex pt-5 text-green-700"> 
              <i className="fas fa-building fa-4x pr-8"></i>
              <h1 className="text-6xl font-family-Roboto">Localizador de Empresas</h1>
          </div>
            <div id="search-row" className="p-16 justify-center inline-flex">
              <input id="txtCNPJ" type="text" data-mask="00.000.000/0000-00" placeholder="CNPJ..." className="rounded-lg 
                          outline-none text-base text-xl border-3 border-green-600 p-2 px-4 
                            pr-32 h-16 placeholder-gray-400 form-control">            
              </input>
              <button type='submit' className="ml-8 px-8 text-2xl rounded-full text-white bg-green-600">
                LOCALIZAR
              </button>
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