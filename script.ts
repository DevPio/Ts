
class Cadastro{

    private valor : HTMLInputElement | null;
    private data : HTMLInputElement| null;
    private quantidade:HTMLInputElement| null;
    private bt :HTMLInputElement| null;
    
   constructor(){
    this.valor = document.querySelector('#valor')
    this.data = document.querySelector('#data')
    this.quantidade = document.querySelector('#quantidade')
    this.bt = document.querySelector('.btn')

    
    this.validadeInput = this.validadeInput.bind(this)
    this.inputsInvalidos = this.inputsInvalidos.bind(this)
   } 
   

   public inputsInvalidos():void{
    const span:Element | null = document.querySelector('.invalido')
        span?.classList.add('ativo')

    setTimeout(()=>{
        span?.classList.remove('ativo')
    },1500)


   }
   public validadeInput(event:Event){
      
    event.preventDefault()
    if(this.valor?.value && this.data?.value && this.quantidade?.value){

        const regras : RegrasdeNegocio = new RegrasdeNegocio()

        const convert = new FormateDate()

        
        regras.insert(convert.formate(this.data.value),this.quantidade.value,this.valor.value)
     

        
        

    }else{
       this.inputsInvalidos()
    }


   }
   public addEVente(){
    
       this.bt?.addEventListener('click',this.validadeInput)
   }
}

const cada = new Cadastro()

cada.addEVente()

